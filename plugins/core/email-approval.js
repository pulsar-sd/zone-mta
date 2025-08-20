'use strict'
const MimeNode = require('nodemailer/lib/mime-node')
const MailDrop = require('@pulsar-sd/zone-mta/lib/mail-drop')
const { generateEmailHtml, generateEmailPlaintext } = require('@pulsar-sd/zone-mta/lib/registered-mail-templates')
const { generatePdf } = require('@pulsar-sd/zone-mta/lib/registered-pdf-generation')

module.exports.title = 'Email Approval'
const REGISTERED_HEADER = 'X-Epost-Registered'
const ORIGINAL_ID_HEADER = 'Triggering-Message-ID'
const PLUGIN_TITLE = 'Registered Mail'

module.exports.init = function (app, done) {
  const HOLD_TIME = 29 * 23 * 59 * 59 * 1000 // 29 days, 23 hours, 59 minutes, 59 seconds
  const approvalExpiry = app.config.approvalExpiry || 7 * 24 * 60 * 60 * 1000 // 7 days

  app.addHook('message:queue', async (envelope, messageInfo, next) => {
    try {
      const skipDelivery = ['approval', 'confirm', 'bounce']
      if (skipDelivery.includes(envelope.interface)) {
        return next()
      }

      if (!envelope.headers.getFirst(REGISTERED_HEADER)) {
        return next()
      }

      if(envelope.headers.getFirst(REGISTERED_HEADER) !== 'true') {
        return next()
      }

      if (envelope.to.length > 0) {
        envelope.requiresApproval = true
        envelope.approvalExpiry = Date.now() + approvalExpiry
        envelope.deferDelivery = envelope.approvalExpiry
        app.logger.info(`[${PLUGIN_TITLE}]`, 'Message %s requires approval for recipients: %s', envelope.id, envelope.to.join(', '))
      }
      envelope.deferDelivery = Date.now() + HOLD_TIME

      const initialMessageDetails = {
        id: envelope.id,
        originalEnvelope: envelope,
        type: 'initial',
        subject: app.config.initialSubject,
        to: [envelope.from],
        attachment: await generatePdf({ status:'initial', data:{}, metadata:{} }),
      }
      let initialOK = false
      generateAndSendNotification(initialMessageDetails, app, err => {
        if (err) {
          throw new Error(err.message)
        }
        initialOK = true
      })

      const notifMessageDetails = {
        id: envelope.id,
        originalEnvelope: envelope,
        type: 'notification',
        subject: app.config.notificationSubject,
        from: envelope.from,
        to: envelope.to,
        email: envelope.to,
        sendingZone: envelope.sendingZone
      }
      let notifOK = false
      generateAndSendNotification(notifMessageDetails, app, err => {
        if (err) {
          throw new Error(err.message)
        }
        notifOK = true
      })
      if (initialOK && notifOK) {
        app.logger.info(`[${PLUGIN_TITLE}]`, `Acceptance and notification for EID ${id} queued for sender and recipient(s)`)
      }
      next()
    } catch (err) {
      app.logger.error(`[${PLUGIN_TITLE}] Error:`, err)
      next()
    }
  })

  app.addHook('queue:bounce', async (bounce, next) => {
    if (bounce.interface !== 'approval') {
      return
    }

    const id = bounce.id
    const bounceReason = bounce.response
    const queue = app.getQueue()
    if (!queue) {
      return
    }
    const collection = queue.mongodb.collection('mail.files')
    const originalID = bounce.headers.getFirst(ORIGINAL_ID_HEADER)
    const query = {
      'metadata.data.id': originalID
    }
    collection.findOne(query).then(async record => {
      if (!record) {
        throw new Error(`Record with ID ${originalID} not found!`)
      }
      const queueData = record.metadata.data
      const messageDetails = {
        id: id,
        type: 'error',
        subject: app.config.errorSubject,
        originalEnvelope: queueData,
        sendingZone: queueData.sendingZone,
        to: [queueData.from],
        errMsg: bounceReason,
        attachment: await generatePdf({ status:'error', data:{}, metadata:{} }),
      }
      generateAndSendNotification(messageDetails, app, err => {
        if (err) {
          throw new Error(err.message)
        }
        app.logger.info(`[${PLUGIN_TITLE}]`, `Error notification for EID ${id} queued for sender`)
        return
      })
    })
    .catch(err => {
      app.logger.error(`[${PLUGIN_TITLE}] Error:`, err)
      return
    })
  })

  app.addAPI('get', '/accept/:id/:sendByEpost', (req, res, next) => {
    const id = req.params.id
    var sendByEpost = req.params.sendByEpost
    const queue = app.getQueue()
    if (!queue) {
      res.writeHead(503, {'Content-Type': 'text/html'});
      res.write(generateEmailHtml('apiResponse', {messageText: `Queue not ready`}));
      res.end();
      return
    }

    const collection = queue.mongodb.collection('mail.files')
    const query = {
      'metadata.data.id': id
    }
    try {
    collection.findOne(query).then(record => {
      if (!record) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(generateEmailHtml('apiResponse', {messageText: 'Message not found. It may already have been processed.'}));
        res.end();
        app.logger.info(`[${PLUGIN_TITLE}]`, `Attempted acceptance of nonexistent message ${id}`)
        return
      }

        const queueData = record.metadata.data
        const defaultSendingZone = queueData.sendingZone ? queueData.sendingZone : 'default'
        const sendingZoneUpdate = {
          'metadata.data.headers': {
            key: 'x-sending-zone',
            line: `X-Sending-Zone: ${sendByEpost==='1' ? 'eposthub' : defaultSendingZone}`
          }
        }
        const update = {
          $set: {
            queued: new Date(),
            locked: false
          },
          $unset: {
            _deferred: ''
          }
        }

        queue.update(id, null, update, err => {
          if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.write(generateEmailHtml('apiResponse', {messageText: err.message}));
            res.end();
          } else {
            collection.update({'metadata.data.id': id}, {$push:sendingZoneUpdate},async err=> {
              if(err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.write(generateEmailHtml('apiResponse', {messageText: err.message}));
              }
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(generateEmailHtml('apiResponse', {messageText: `Message ${id} accepted`}));
              res.end();
              const messageDetails = {
                id: id,
                type: 'arrival',
                subject: app.config.arrivalSubject,
                originalEnvelope: queueData,
                to: [queueData.from],
                attachment: await generatePdf({ status:'arrival', data:{}, metadata:{} }),
              }
              generateAndSendNotification(messageDetails, app, err => {
                if (err) {
                  throw new Error(err.message)
                }
                app.logger.info(`[${PLUGIN_TITLE}]`, `Acceptance notification for EID ${id} queued for sender`)
              })
            })
          }
        })
      })
      .catch(err => {
        res.writeHead(503, {'Content-Type': 'text/html'});
        res.write(generateEmailHtml('apiResponse', {messageText: err}));
        res.end();
        app.logger.error(`[${PLUGIN_TITLE}] Error:`, err)
        return
      })
    } catch (err) {
      res.writeHead(503, {'Content-Type': 'text/html'});
      res.write(generateEmailHtml('apiResponse', {messageText: err}));
      res.end();
      return
    }
  })

  app.addAPI('get', '/reject/:id', (req, res, next) => {
    const id = req.params.id
    const queue = app.getQueue()
    if (!queue) {
      res.writeHead(503, {'Content-Type': 'text/html'});
      res.write(generateEmailHtml('apiResponse', {messageText: 'Queue not ready'}));
      res.end();
      return
    }

    const collection = queue.mongodb.collection('mail.files')
    const query = {
      'metadata.data.id': id
    }
    collection.findOne(query).then(record => {
      if (!record) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(generateEmailHtml('apiResponse', {messageText: 'Message not found. It may already have been processed.'}));
        res.end();
        app.logger.info(`[${PLUGIN_TITLE}]`, `Attempted rejection of nonexistent message ${id}`)
        return
      }
      const queueData = record.metadata.data
      queue.mongodb.collection(queue.options.collection).deleteMany({ id }, err => {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/html'});
          res.write(generateEmailHtml('apiResponse', {messageText: err.msg}));
          res.end();
          return
        }
        else {
          queue.removeMessage(id, async rmErr => {
            if (rmErr) {
              res.writeHead(500, {'Content-Type': 'text/html'});
              res.write(generateEmailHtml('apiResponse', {messageText: rmErr.message}));
              res.end();
              app.logger.info(`[${PLUGIN_TITLE}] Rejecting failure:`, `Failed to reject message with EID: ${id}`)
            }
            const recipientMessageDetails = {
              id: id,
              type: 'reject',
              subject: app.config.rejectSubject,
              originalEnvelope: queueData,
              to: [queueData.from],
              attachment: await generatePdf({ status:'reject', data:{}, metadata:{} }),
            }
            let recipientOK = false
            generateAndSendNotification(recipientMessageDetails, app, err => {
              if (err) {
                throw new Error(err.message)
              }
              recipientOK = true
            })
            const senderMessageDetails = {
              ...recipientMessageDetails,
              to: queueData.to
            }
            let senderOK = false
            generateAndSendNotification(senderMessageDetails, app, err => {
              if (err) {
                throw new Error(err.message)
              }
              senderOK = true
            })
            if (recipientOK && senderOK) {
              app.logger.info(`[${PLUGIN_TITLE}]`, `Rejection notification for EID ${id} queued for sender and recipient(s)`)
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(generateEmailHtml('apiResponse', {messageText: `Message ${id} rejected`}));
            res.end();
            return
          })
        }
      })
    })
      .catch(err => {
        res.writeHead(503, {'Content-Type': 'text/html'});
        res.write(generateEmailHtml('apiResponse', {messageText: err}));
        res.end();
        app.logger.error(`[${PLUGIN_TITLE}] Error:`, err)
        return
      })
  })

  app.addAPI('get', '/read/:id', (req, res, next) => {
    const id = req.params.id
    const queue = app.getQueue()
    if (!queue) {
      res.writeHead(503, {'Content-Type': 'text/html'});
      res.write(generateEmailHtml('apiResponse', {messageText: 'Queue not ready'}));
      res.end();
      return
    }

    const collection = queue.mongodb.collection('mail.files')
    const query = {
      'metadata.data.id': id
    }
    collection.findOne(query).then(async record => {
      if (!record) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(generateEmailHtml('apiResponse', {messageText: 'Message not found. It may already have been processed.'}));
        res.end();
        app.logger.info(`[${PLUGIN_TITLE}]`, `Attempted reading of nonexistent message ${id}`)
        return
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(generateEmailHtml('apiResponse', {messageText: `Message ${id} read`}));
      res.end();
      const queueData = record.metadata.data
      const messageDetails = {
        id: id,
        type: 'read',
        subject: app.config.readSubject,
        originalEnvelope: queueData,
        to: [queueData.from],
        attachment: await generatePdf({ status:'read', data:{}, metadata:{} }),
      }
      generateAndSendNotification(messageDetails, app, err => {
        if (err) {
          throw new Error(err.message)
        }
        app.logger.info(`[${PLUGIN_TITLE}]`, `Read notification for EID ${id} queued for sender`)
      })
    })
      .catch(err => {
        res.writeHead(500, {'Content-Type': 'text/html'});
        res.write(generateEmailHtml('apiResponse', {messageText: err}));
        res.end();
        app.logger.error(`[${PLUGIN_TITLE}] Error:`, err)
        return
      })
  })

  done()
}

function generateAndSendNotification(messageDetails, app, callback) {
  const queue = app.getQueue()
  if (!queue) {
    return callback(new Error('Queue not available'))
  }

  queue.generateId((err, newId) => {
    if (err) {
      return callback(err)
    }

    let { originalEnvelope, id, subject, type, from, to, sendingZone, errMsg } = messageDetails

    if(!sendingZone) {
      sendingZone = originalEnvelope.sendingZone
    }

    const notifEnvelope = {
      id: newId,
      interface: 'approval',
      from: from ? from : app.config.mailerDaemon,
      to: to,
      sendingZone: sendingZone,
      transtype: 'NOTIFY',
      time: Date.now(),
      originalEnvelope: originalEnvelope,
      triggeringMessageID: id
    }

    // Build notification message
    const root = new MimeNode('multipart/mixed')
    root.setHeader('From', notifEnvelope.from)
    root.setHeader('To', notifEnvelope.to.join(', '))
    root.setHeader('Subject', subject)
    root.setHeader('X-Epost-Sign', 'true')
    root.setHeader('X-Sending-Zone', sendingZone)
    root.setHeader(ORIGINAL_ID_HEADER, id)
    root.setHeader('MIME-Version', '1.0')
    const alt = root.createChild('multipart/alternative');

    let originalSubject = ''
    if (typeof originalEnvelope.headers.getFirst === 'function') {
      originalSubject = originalEnvelope.headers.getFirst('subject')
    }
    else if (originalEnvelope.headers) {
      originalSubject = getHeaderValue(originalEnvelope.headers, 'subject')
    }
    let templateData = {
      eid: id,
      subject: originalSubject ? originalSubject : '',
      channel: sendingZone,
      acceptUrl: '',
      rejectUrl: '',
      epostUrl: '',
      errMsg: errMsg,
    }

    if (id) {
      let baseUrl = app.config.serverBaseUrl
      templateData.acceptUrl = `${baseUrl}/plugin/${app.options.key || 'core/email-approval'}/accept/${id}/0`
      templateData.epostUrl = `${baseUrl}/plugin/${app.options.key || 'core/email-approval'}/accept/${id}/1`
      templateData.rejectUrl = `${baseUrl}/plugin/${app.options.key || 'core/email-approval'}/reject/${id}`
    }
    const plainContent = generateEmailPlaintext(type,templateData)
    alt.createChild('text/plain; charset=utf-8')
    .setHeader('Content-Disposition', 'inline')
    .setContent(plainContent)


    const htmlContent = generateEmailHtml(type, templateData)
    alt.createChild('text/html; charset=UTF-8')
    .setHeader('Content-Disposition', 'inline')
    .setContent(htmlContent)

    if(messageDetails.attachment) {
      root
        .createChild('application/pdf')
        .setHeader('Content-Type', 'application/pdf; name=confirm-reciept.pdf')
        .setHeader('Content-Disposition', 'attachment; filename=confirm-reciept.pdf')
        .setHeader('Content-Transfer-Encoding', 'base64')
        .setContent(messageDetails.attachment);
    }

    const maildrop = new MailDrop(queue)
    maildrop.add(notifEnvelope, root.createReadStream(), err => {
      if (err && err.name !== 'SMTPResponse') {
        return callback(err)
      }
      return callback()
    })
  })
}
function getHeaderValue(headers, targetKey) {
  for (const header of headers) {
    if (header.key === targetKey) {
      const regex = new RegExp(`^${targetKey}:\\s*`)
      return header.line.replace(regex, "")
    }
  }
  return null
}