'use strict';

const os = require('os');
const MimeNode = require('nodemailer/lib/mime-node');

module.exports.title = 'Email Alert Notification';
module.exports.init = function (app, done) {
  // generate a multipart/report DSN failure response
  function generateAlertMessage(alert, opts) {
    opts = opts || {};

    let headers = alert.headers;
    let messageId = headers.getFirst('Message-ID');

    let from = alert.from;
    let to = alert.to;
    let sendingZone = alert.zone || app.config.sendingZone;

    let rootNode = new MimeNode('multipart/report; report-type=delivery-status');

    // format Mailer Daemon address
    let fromAddress = rootNode._convertAddresses(rootNode._parseAddresses(from)).replace(/\[HOSTNAME\]/gi, alert.name || os.hostname());

    rootNode.setHeader('X-Epost-Sign', true);
    rootNode.setHeader('From', fromAddress);
    rootNode.setHeader('To', to);
    rootNode.setHeader('X-Sending-Zone', sendingZone);
    rootNode.setHeader('X-Recipients', alert.to);
    rootNode.setHeader('Auto-Submitted', 'auto-generated');
    rootNode.setHeader('Subject', `${alert.subject}`);

    if (messageId) {
      rootNode.setHeader('In-Reply-To', messageId);
      rootNode.setHeader('References', messageId);
    }

    let alertContent = ''
    alertContent = `Low disk space alert triggered by audit log archive`;
    if(alert.message) {
      if(typeof alert.message === 'string' || alert.message instanceof String){
        alertContent = alert.message;
      }
    }

    rootNode.createChild('text/html').setHeader('Content-Description', 'Notification').setContent(alertContent);

    if(alert.includeDiagnostic) {
      rootNode
        .createChild('message/delivery-status')
        .setHeader('Content-Description', 'Delivery report')
        .setContent([`Reporting-MTA: dns ${alert.name || os.hostname()}`, `Final-Recipient: rfc822 ${alert.to}`, `Action: ${alert.category==='SUCCESS'?'delivered':'failed'}`, `Status: ${alert.category==='SUCCESS'?'2.0.0':'5.0.0'}`].join('\n'));

      rootNode.createChild('text/rfc822-headers').setHeader('Content-Description', 'Delivered Message Headers').setContent(headers.build());
    }

    if(alert.alertAttachment) {
      rootNode
        .createChild('application/pdf')
        .setHeader('Content-Type', 'application/pdf; name=alert-reciept.pdf')
        .setHeader('Content-Disposition', 'attachment; filename=alert-reciept.pdf')
        .setHeader('Content-Transfer-Encoding', 'base64')
        .setContent(alert.alertAttachment);
    }

    return rootNode;
  }

  // Send alert notification to the MAIL FROM email
  app.addHook('queue:alert', (alert, maildrop, next) => {
    if ((app.config.disableInterfaces || []).includes(alert.interface)) {
      // alerts are disabled for messages from this interface (eg. forwarded messages)
      return next();
    }

    if (!alert.from) {
      // nowhere to send the alert to
      return next();
    }

    let headers = alert.headers;

    if (headers.get('Received').length > 25) {
      // too many hops
      app.logger.info(
        'Alert',
        'Too many hops (%s)! Delivery loop detected for %s.%s, dropping message',
        headers.get('Received').length,
        alert.seq,
        alert.id
      );
      return next();
    }

    let envelope = {
      interface: 'alert',
      sessionId: alert.sessionId,
      from: alert.from,
      to: alert.to,
      transtype: 'HTTP',
      time: Date.now()
    };

    let mail = null

    mail = generateAlertMessage(alert);


    app.getQueue().generateId((err, id) => {
      if (err) {
        return next(err);
      }
      envelope.id = id;
      // Add sendingZone to envelope for alert message
      envelope.sendingZone = alert.zone;

      maildrop.add(envelope, mail.createReadStream(), err => {
        if(err && err.message) {
          app.logger.error('Alert', err.message);
          app.remotelog(alert.id, alert.seq, 'QUEUE_BOUNCE', {
            queued: 'no',
            error: err.message
          });
        }

        next();
      });
    });
  });

  done();
};
