'use strict';

const os = require('os');
const MimeNode = require('nodemailer/lib/mime-node');

module.exports.title = 'Email Confirm Notification';
module.exports.init = function (app, done) {
    // generate a multipart/report DSN failure response
    function generateConfirmMessage(confirm, opts) {
        opts = opts || {};

        let headers = confirm.headers;
        let messageId = headers.getFirst('Message-ID');

        let cfg = app.config.zoneConfig[confirm.zone];
        if (!cfg || cfg.disabled) {
            cfg = {};
        }

        let from = {name:app.config.mailerDaemon.name,address:confirm.from} || cfg.mailerDaemon || app.config.mailerDaemon;
        let to = confirm.to;
        let sendingZone = cfg.sendingZone || app.config.sendingZone;

        let rootNode = new MimeNode('multipart/report; report-type=delivery-status');

        // format Mailer Daemon address
        let fromAddress = rootNode._convertAddresses(rootNode._parseAddresses(from)).replace(/\[HOSTNAME\]/gi, confirm.name || os.hostname());

        rootNode.setHeader('X-Epost-Sign', true);
        rootNode.setHeader('From', fromAddress);
        rootNode.setHeader('To', to);
        rootNode.setHeader('X-Sending-Zone', sendingZone);
        rootNode.setHeader('X-Recipients', confirm.to);
        rootNode.setHeader('Auto-Submitted', 'auto-generated');
        rootNode.setHeader('Subject', `${confirm.subject} (Success)`);

        if (messageId) {
            rootNode.setHeader('In-Reply-To', messageId);
            rootNode.setHeader('References', messageId);
        }

        let confirmContent = ''
        confirmContent = `Sucessfully sent message to ${confirm.originalRecipient}`;
        if(confirm.message) {
            if(typeof confirm.message === 'string' || confirm.message instanceof String){
                confirmContent = confirm.message;
            }
        }

        rootNode.createChild('text/plain').setHeader('Content-Description', 'Notification').setContent(confirmContent);

        if(confirm.includeDiagnostic) {
            rootNode
                .createChild('message/delivery-status')
                .setHeader('Content-Description', 'Delivery report')
                .setContent([`Reporting-MTA: dns ${confirm.name || os.hostname()}`, `Final-Recipient: rfc822 ${confirm.to}`, `Action: ${confirm.category==='SUCCESS'?'delivered':'failed'}`, `Status: ${confirm.category==='SUCCESS'?'2.0.0':'5.0.0'}`].join('\n'));

            rootNode.createChild('text/rfc822-headers').setHeader('Content-Description', 'Delivered Message Headers').setContent(headers.build());
        }

        if(confirm.confirmAttachment) {
          rootNode
            .createChild('application/pdf')
            .setHeader('Content-Type', 'application/pdf; name=confirm-reciept.pdf')
            .setHeader('Content-Disposition', 'attachment; filename=confirm-reciept.pdf')
            .setHeader('Content-Transfer-Encoding', 'base64')
            .setContent(confirm.confirmAttachment);
        }

        return rootNode;
    }

    function generateBounceMessage(bounce, opts) {
      opts = opts || {};
      const { isDelayed } = opts;

      let headers = bounce.headers;
      let messageId = headers.getFirst('Message-ID');

      let cfg = app.config.zoneConfig[bounce.zone];
      if (!cfg || cfg.disabled) {
          cfg = {};
      }

      let from = {name:app.config.mailerDaemon.name,address:bounce.from} || cfg.mailerDaemon || app.config.mailerDaemon;
      let to = bounce.to;
      let sendingZone = cfg.sendingZone || app.config.sendingZone;

      let rootNode = new MimeNode('multipart/report; report-type=delivery-status');

      // format Mailer Daemon address
      let fromAddress = rootNode._convertAddresses(rootNode._parseAddresses(from)).replace(/\[HOSTNAME\]/gi, bounce.name || os.hostname());

      rootNode.setHeader('X-Epost-Sign', true);
      rootNode.setHeader('From', fromAddress);
      rootNode.setHeader('To', to);
      rootNode.setHeader('X-Sending-Zone', sendingZone);
      rootNode.setHeader('X-Failed-Recipients', bounce.to);
      rootNode.setHeader('Auto-Submitted', 'auto-replied');
      rootNode.setHeader('Subject', `${confirm.subject} (Failure)`);

      if (messageId) {
          rootNode.setHeader('In-Reply-To', messageId);
          rootNode.setHeader('References', messageId);
      }

      let bounceContent = `Delivery to the following recipient failed permanently:
  ${bounce.to}

Technical details of permanent failure:

${bounce.response}

`;

      if (isDelayed) {
          bounceContent = `Delivery incomplete

There was a temporary problem delivering your message to ${bounce.to}.

Delivery will be retried. You'll be notified if the delivery fails permanently.

Technical details of the failure:

${bounce.response}

`;
      }

      rootNode.createChild('text/plain').setHeader('Content-Description', 'Notification').setContent(bounceContent);

      rootNode
          .createChild('message/delivery-status')
          .setHeader('Content-Description', 'Delivery report')
          .setContent(
              `Reporting-MTA: dns; ${bounce.name || os.hostname()}
X-ZoneMTA-Queue-ID: ${bounce.id}
X-ZoneMTA-Sender: rfc822; ${bounce.from}
Arrival-Date: ${new Date(bounce.arrivalDate).toUTCString().replace(/GMT/, '+0000')}

Final-Recipient: rfc822; ${bounce.to}
Action: ${isDelayed ? 'delayed' : 'failed'}
Status: ${isDelayed ? '4.0.0' : '5.0.0'}
` +
                  (bounce.mxHostname
                      ? `Remote-MTA: dns; ${bounce.mxHostname}
`
                      : '') +
                  `Diagnostic-Code: smtp; ${bounce.response}

`
          );

      rootNode.createChild('text/rfc822-headers').setHeader('Content-Description', 'Undelivered Message Headers').setContent(headers.build());

      if(bounce.confirmAttachment) {
        rootNode
          .createChild('application/pdf')
          .setHeader('Content-Type', 'application/pdf; name=confirm-reciept.pdf')
          .setHeader('Content-Disposition', 'attachment; filename=confirm-reciept.pdf')
          .setHeader('Content-Transfer-Encoding', 'base64')
          .setContent(bounce.confirmAttachment);
      }

      return rootNode;
  }

    // Send confirm notification to the MAIL FROM email
    app.addHook('queue:confirm', (confirm, maildrop, next) => {
        if ((app.config.disableInterfaces || []).includes(confirm.interface)) {
            // confirms are disabled for messages from this interface (eg. forwarded messages)
            return next();
        }

        if (!confirm.from) {
            // nowhere to send the confirm to
            return next();
        }

        let headers = confirm.headers;

        if (headers.get('Received').length > 25) {
            // too many hops
            app.logger.info(
                'Confirm',
                'Too many hops (%s)! Delivery loop detected for %s.%s, dropping message',
                headers.get('Received').length,
                confirm.seq,
                confirm.id
            );
            return next();
        }

        let envelope = {
            interface: 'confirm',
            sessionId: confirm.sessionId,
            from: confirm.from,
            to: confirm.to,
            transtype: 'HTTP',
            time: Date.now()
        };

        let mail = null

        if(confirm.category==='SUCCESS'){
          mail = generateConfirmMessage(confirm);
        } else {
          mail = generateBounceMessage(confirm);
        }

        app.getQueue().generateId((err, id) => {
            if (err) {
                return next(err);
            }
            envelope.id = id;

            maildrop.add(envelope, mail.createReadStream(), err => {
                if (err && err.name !== 'SMTPResponse') {
                    app.logger.error('Confirm', err.message);
                    app.remotelog(confirm.id, confirm.seq, 'QUEUE_BOUNCE', {
                        queued: 'no',
                        confirmType: 'failure',
                        error: err.message
                    });
                } else {
                    app.remotelog(confirm.id, confirm.seq, 'QUEUE_BOUNCE', {
                        queued: 'yes',
                        confirmType: 'failure',
                        confirmId: envelope.id
                    });
                }

                next();
            });
        });
    });

    done();
};
