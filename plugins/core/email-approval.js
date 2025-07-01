'use strict';

const MimeNode = require('nodemailer/lib/mime-node');
const MailDrop = require('@pulsar-sd/zone-mta/lib/mail-drop');
const { generateEmailHtml } = require('@pulsar-sd/zone-mta/lib/registered-mail-templates')

module.exports.title = 'Email Approval';
const REGISTERED_HEADER = 'X-Epost-Registered'
const PLUGIN_TITLE = 'Registered Mail'

module.exports.init = function (app, done) {
  const HOLD_TIME = 20 * 365 * 24 * 3600 * 1000; // 20 years, practically infinity
  const approvalExpiry = app.config.approvalExpiry || 7 * 24 * 60 * 60 * 1000 // 7 days

  app.addHook('message:queue', (envelope, messageInfo, next) => {
    try {
      const skipDelivery = ['approval', 'confirm', 'bounce']
      if (skipDelivery.includes(envelope.interface)) {
        return next();
      }

      if (!envelope.headers.getFirst(REGISTERED_HEADER)) {
        return next()
      }

      if (envelope.to.length > 0) {
        envelope.requiresApproval = true
        envelope.approvalExpiry = Date.now() + approvalExpiry
        envelope.deferDelivery = envelope.approvalExpiry
        app.logger.info(`[${PLUGIN_TITLE}]`, 'Message %s requires approval for recipients: %s', envelope.id, envelope.to.join(', '))
      }
      envelope.deferDelivery = Date.now() + HOLD_TIME;

      const messageDetails = {
        id: envelope.id,
        originalEnvelope: envelope,
        type: 'notification',
        subject: app.config.initialSubject,
        to: envelope.to,
        sendingZone: envelope.sendingZone
      }
      generateAndSendNotification(messageDetails, app, err => {
        if (err) {
          throw new Error(err.message)
        }
        next();
      });
    } catch (err) {
      app.logger.error(`[${PLUGIN_TITLE}] Error:`, err);
      next();
    }
  });

  app.addAPI('get', '/accept/:id', (req, res, next) => {
    const id = req.params.id;
    const queue = app.getQueue();
    if (!queue) {
      res.json(503, { error: 'Queue not ready' });
      return next();
    }


    const collection = queue.mongodb.collection('mail.files')
    const query = {
      'metadata.data.id':id
    }
    collection.findOne(query).then( record => {
      if(!record) {
        throw new Error(`Record with ID ${id} not found!`)
      }
      const queueData = record.metadata.data
      const update = {
        $set: {
          queued: new Date(),
          locked: false
        },
        $unset: {
          _deferred: ''
        }
      };

      queue.update(id, null, update, err => {
        if (err) {
          res.json(500, { error: err.message });
        } else {
          res.json(200, { status: 'accepted', id });
        }
      })

      const messageDetails = {
        id: id,
        type: 'arrival',
        subject: app.config.arrivalSubject,
        originalEnvelope: queueData,
        to: [queueData.from], // the original sender is the recipient of this notification(?)
      }
      generateAndSendNotification(messageDetails, app, err => {
        if (err) {
          throw new Error(err.message)
        }
        next();
      });
    })
  });

  app.addAPI('get', '/reject/:id', (req, res, next) => {
    const id = req.params.id;
    const queue = app.getQueue();
    if (!queue) {
      res.json(503, { error: 'Queue not ready' });
      return next();
    }

    queue.mongodb.collection(queue.options.collection).deleteMany({ id }, err => {
      if (err) {
        res.json(500, { error: err.message });
        return next();
      }

      queue.removeMessage(id, rmErr => {
        if (rmErr) {
          res.json(500, { error: rmErr.message });
          const messageDetails = {
            type: 'notification',
            subject: app.config.initialSubject
          }
          generateAndSendNotification(messageDetails, app, err => {
            if (err) {
              throw new Error(err.message)
            }
            next();
          });
        } else {
          app.logger.info(`[${PLUGIN_TITLE}] Rejecting failure:`, `Failed to reject message with EID: ${id}`)
          res.json(200, { status: 'rejected', id });
        }
      });
      next();
    });
  });

  done();
};

async function getRecord(queue, id) {
  const collection = queue.db.collection("zone-mta")
  const record = await collection.findOne({id:id})
  return record
}

function generateAndSendNotification(messageDetails, app, callback) {
  const queue = app.getQueue();
  if (!queue) {
    return callback(new Error('Queue not available'));
  }

  queue.generateId((err, newId) => {
    if (err) {
      return callback(err);
    }

    const { originalEnvelope, id, subject, type, to, sendingZone } = messageDetails

    const notifEnvelope = {
      id: newId,
      interface: 'approval',
      from: to && to[0] ? to[0] : app.config.mailerDaemon,
      to: to,
      sendingZone: sendingZone,
      transtype: 'NOTIFY',
      time: Date.now()
    };

    // Build notification message
    const root = new MimeNode('text/plain');
    root.setHeader('From', notifEnvelope.from);
    root.setHeader('To', notifEnvelope.to.join(', '));
    root.setHeader('Subject', subject);
    root.setHeader('Content-Type', 'text/html; charset=UTF-8');

    let originalSubject = ''
    if(typeof originalEnvelope.headers.getFirst === 'function') {
      originalSubject = originalEnvelope.headers.getFirst('subject')
    }
    else if (originalEnvelope.headers) {
      originalSubject = getHeaderValue(originalEnvelope.headers,'subject')
    }
    let templateData = {
      eid: id,
      subject: originalSubject ? originalSubject : '',
      channel: sendingZone
    }

    let acceptUrl = ''
    let rejectUrl = ''

    if(id) {
      let baseUrl = app.config.serverBaseUrl;
      templateData.acceptUrl = `${baseUrl}/plugin/${app.options.key || 'core/email-approval'}/accept/${id}`;
      templateData.rejectUrl = `${baseUrl}/plugin/${app.options.key || 'core/email-approval'}/reject/${id}`;
    }


    const htmlContent = generateEmailHtml(type, templateData)
    root.setContent(htmlContent);

    // Push notification into queue via existing MailDrop helper
    const maildrop = new MailDrop(queue);

    maildrop.add(notifEnvelope, root.createReadStream(), err => {
      if (err && err.name !== 'SMTPResponse') {
        return callback(err);
      }
      return callback();
    });
  });
}
function getHeaderValue(headers,targetKey) {
  for (const header of headers) {
    if (header.key === targetKey) {
      const regex = new RegExp(`^${targetKey}:\\s*`);
      return header.line.replace(regex, "");
    }
  }
  return null; // Return null if subject header is not found
}