'use strict';

const fs = require('fs/promises');
const path = require('path');
const {
  PDFDocument,
  StandardFonts,
  rgb,
  PageSizes,
} = require('pdf-lib');

const STATUSES = ['initial','error','arrival','timeout','reject','read'];
const TEMPLATES = {
  arrival: {
    color: rgb(0,0.45,0.9)
  }
};

async function generatePdf({ status='initial', data={}, metadata={} } = {}) {
  if (!STATUSES.includes(status)) {
    throw new Error(`Unknown status "${status}".`);
  }


  const pdfDoc = await PDFDocument.create();
  if (metadata.title)    pdfDoc.setTitle(metadata.title);
  if (metadata.author)   pdfDoc.setAuthor(metadata.author);
  if (metadata.subject)  pdfDoc.setSubject(metadata.subject);
  if (Array.isArray(metadata.keywords)) pdfDoc.setKeywords(metadata.keywords);
  if (metadata.producer) pdfDoc.setProducer(metadata.producer);
  if (metadata.creator)  pdfDoc.setCreator(metadata.creator);
  const page   = pdfDoc.addPage(PageSizes.A4);
  const { width, height } = page.getSize();
  const TOP_MARGIN = 100;
  let cursorY = height - TOP_MARGIN;
  const font     = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let logoImg, lockImg, appStoreImg, gpImg, fbImg, ytImg, igImg, liImg;

    logoImg     = await embedPng(pdfDoc,'assets/logo.png');
    lockImg     = await embedPng(pdfDoc,'assets/lock.png');
    appStoreImg = await embedPng(pdfDoc,'assets/appstore.png');
    gpImg       = await embedPng(pdfDoc,'assets/googleplay.png');
    fbImg       = await embedPng(pdfDoc,'assets/fb.png');
    ytImg       = await embedPng(pdfDoc,'assets/yt.png');
    igImg       = await embedPng(pdfDoc,'assets/ig.png');
    liImg       = await embedPng(pdfDoc,'assets/li.png');


if (status === 'arrival') {
  if (pdfDoc.getPageCount() === 1) pdfDoc.removePage(0);

  const translations = [
    { code:'en',
      title:     'Delivery Receipt',
      idLabel:   `Registered Mail ID: ${data.eid || 'N/A'}`,
      subject:   `Subject: ${data.subject || 'N/A'}`,
      channelLbl:`Channel: ${data.channel || 'N/A'}`,
      p1:        `Your registered mail with ID ${data.eid || 'N/A'} has been accepted by the recipient and delivered via ${data.channel || 'N/A'}.`,
      p2:        'Attached you will find the delivered original email and the receipt as a signed PDF-A with the delivery details.',
      important:'Please keep the PDF for your records as proof of successful delivery.',
    },
    { code:'de',
      title:     'Zustellungsquittung',
      idLabel:   `Einschreiben ID: ${data.eid || 'N/A'}`,
      subject:   `Betreff: ${data.subject || 'N/A'}`,
      channelLbl:`Kanal: ${data.channel || 'N/A'}`,
      p1:        `Ihr Einschreiben mit der EID: ${data.eid || 'N/A'} wurde vom Empfänger angenommen und per ${data.channel || 'N/A'} zugestellt.`,
      p2:        'Im Anhang finden Sie die zugestellte originale eMail und die Quittung als signiertes PDF-A mit den Details der Zustellung.',
      important:'Bewahren Sie das PDF für den späteren Nachweis der erfolgreichen Zustellung des Einschreibens in Ihren Unterlagen auf.',
    },
    { code:'it',
      title:     'Ricevuta di Consegna',
      idLabel:   `ID Raccomandata: ${data.eid || 'N/A'}`,
      subject:   `Oggetto: ${data.subject || 'N/A'}`,
      channelLbl:`Canale: ${data.channel || 'N/A'}`,
      p1:        `La tua raccomandata con ID ${data.eid || 'N/A'} è stata accettata dal destinatario e consegnata tramite ${data.channel || 'N/A'}.`,
      p2:        'In allegato trovi l’email originale consegnata e la ricevuta in PDF-A firmato con i dettagli della consegna.',
      important:'Conserva il PDF per i tuoi archivi come prova della consegna avvenuta con successo.',
    },
    { code:'fr',
      title:     'Accusé de livraison',
      idLabel:   `ID de courrier recommandé : ${data.eid || 'N/A'}`,
      subject:   `Objet : ${data.subject || 'N/A'}`,
      channelLbl:`Canal : ${data.channel || 'N/A'}`,
      p1:        `Votre courrier recommandé avec l'ID ${data.eid || 'N/A'} a été accepté par le destinataire et livré via ${data.channel || 'N/A'}.`,
      p2:        'Vous trouverez ci-joint l’e-mail original livré ainsi que l’accusé de réception au format PDF-A signé avec les détails de la livraison.',
      important:'Veuillez conserver ce PDF dans vos archives comme preuve de la livraison réussie.',
    }
  ];

  const labels = ['English','Deutsch','Italiano','Française'];

  for (const L of translations) {
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height } = page.getSize();
    let y = height - 100;

    // Logo
    page.drawImage(logoImg, { x: 50, y, width: 60, height: 40 });
    y -= 60;

    {
      const active = translations.indexOf(L);
      let x = 50, gap = 15, sz = 10;
      for (let i = 0; i < labels.length; i++) {
        const f = (i === active ? fontBold : font);
        page.drawText(labels[i], { x, y, size: sz, font: f, color: rgb(0.4,0.4,0.4) });
        x += f.widthOfTextAtSize(labels[i], sz) + gap;
      }
      y -= 40;
    }

    page.drawText(L.title,      { x:50, y, size:24, font: fontBold }); y -= 30;
    page.drawText(L.idLabel,    { x:50, y, size:18, font: fontBold }); y -= 30;
    page.drawText(L.subject,    { x:50, y, size:18, font: fontBold }); y -= 30;
    page.drawText(L.channelLbl, { x:50, y, size:18, font: fontBold }); y -= 50;

    {
      const h = 40, b = y - h;
      page.drawRectangle({ x:50, y:b, width:width-100, height:h, color:rgb(0,0,0) });
      const isz = 20, iy = b + (h - isz)/2;
      page.drawImage(lockImg, { x:60, y:iy, width:isz, height:isz });
      const ty = b + (h - 12)/2;
      page.drawText(L.channelLbl.split(': ')[1].toUpperCase(), {
        x: 60 + isz + 10, y: ty,
        size:12, font:fontBold, color:rgb(1,1,1)
      });
      y = b - 40;
    }

    {
      const indent = 60 + 20 + 10;               
      const maxW   = width - indent - 50;         
      drawWrapped(page, L.p1, indent, y, maxW, 14, font); y -= 30;
      drawWrapped(page, L.p2, indent, y, maxW, 14, font); y -= 60;
    }

    {
      const ih = 70, ib = y - ih;
      page.drawRectangle({ x:50, y:ib, width:width-100, height:ih, color:rgb(1,0.8,0) });
      page.drawText('Important!', { x:width/2-40, y:ib+ih-30, size:16, font:fontBold });
      drawWrapped(page, L.important, 60 + 20 + 10, ib+ih-50, width - (60+20+10) - 50, 12, font);
      y = ib - 40;
    }

    page.drawText('Best regards,',  { x:50, y, size:14, font }); y -= 20;
    page.drawText('Your ePost Team', { x:50, y, size:14, font }); y -= 60;
    page.drawLine({
      start:    { x:50,          y },
      end:      { x:width - 50,  y },
      thickness: 1,
      color:    rgb(0.8,0.8,0.8)
    });
    y -= 40;
    page.drawText('Follow us', { x:50, y, size:12, font:fontBold });
    ['fb','yt','ig','li'].forEach((key,i) => {
      const img = { fb:fbImg, yt:ytImg, ig:igImg, li:liImg }[key];
      page.drawImage(img, { x:50 + i*40, y: y-30, width:24, height:24 });
    });
    y -= 70;
    page.drawText('ePost Service AG', { x:50, y, size:10, font, color:rgb(0.4,0.4,0.4) });
  }
} else if (status === 'error') {
  if (pdfDoc.getPageCount() === 1) pdfDoc.removePage(0);

  const translations = [
    {
      code: 'en',
      title:        'Error Receipt',
      idLabel:      `Registered Mail ID: ${data.eid || 'N/A'}`,
      subject:      `Subject: ${data.subject || 'N/A'}`,
      p1:           `An error occurred during transmission of your Registered Mail (ID: ${data.eid || 'N/A'}). No delivery was made.`,
      errorHeading: 'Error!',
      errorMsg:     data.errMsg || 'Unknown error',
      p2a:          'Attached you will find the original email and the receipt as a signed PDF-A with full error details.',
      p2b:          'The registered mail has been deleted.',
      important:    'Please keep the PDF in your records as proof of the failed delivery attempt.',
    },
    {
      code: 'de',
      title:        'Fehlerquittung',
      idLabel:      `Einschreiben ID: ${data.eid || 'N/A'}`,
      subject:      `Betreff: ${data.subject || 'N/A'}`,
      p1:           `Bei der Übertragung Deines Einschreibens mit der EID: ${data.eid || 'N/A'} trat ein Fehler auf. Es erfolgte keine Zustellung.`,
      errorHeading: `Fehler!`,
      errorMsg:     data.errMsg || 'Unbekannter Fehler',
      p2a:          'Im Anhang finden Sie die originale eMail und die Quittung als signiertes PDF-A mit den Details des Fehlers.',
      p2b:          'Das betreffende Einschreiben wurde gelöscht.',
      important:    'Bewahren Sie das PDF für den späteren Nachweis der fehlerhaften Zustellung des Einschreibens in Ihren Unterlagen auf.',
    },
    {
      code: 'it',
      title:        'Ricevuta di Errore',
      idLabel:      `ID Raccomandata: ${data.eid || 'N/A'}`,
      subject:      `Oggetto: ${data.subject || 'N/A'}`,
      p1:           `Si è verificato un errore durante la trasmissione della tua raccomandata (ID: ${data.eid || 'N/A'}). Nessuna consegna è avvenuta.`,
      errorHeading: 'Errore!',
      errorMsg:     data.errMsg || 'Errore sconosciuto',
      p2a:          'In allegato trovi l’e-mail originale e la ricevuta in PDF-A firmato con tutti i dettagli dell’errore.',
      p2b:          'La raccomandata è stata eliminata.',
      important:    'Conserva il PDF nei tuoi archivi come prova del tentativo di consegna fallito.',
    },
    {
      code: 'fr',
      title:        `Accusé d'erreur`,
      idLabel:      `ID de courrier recommandé : ${data.eid || 'N/A'}`,
      subject:      `Objet : ${data.subject || 'N/A'}`,
      p1:           `Une erreur est survenue lors de la transmission de votre courrier recommandé (ID : ${data.eid || 'N/A'}). Aucune livraison n'a été effectuée.`,
      errorHeading: 'Erreur !',
      errorMsg:     data.errMsg || 'Erreur inconnue',
      p2a:          `Vous trouverez ci-joint l'e-mail original ainsi que l'accusé de réception au format PDF-A signé avec tous les détails de l'erreur.`,
      p2b:          'Le courrier recommandé a été supprimé.',
      important:    `Veuillez conserver ce PDF dans vos archives comme preuve de la tentative de livraison échouée.`,
    }
  ];

  const labels = ['English','Deutsch','Italiano','Française'];

  for (const L of translations) {
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height } = page.getSize();
    let y = height - 100;

    page.drawImage(logoImg, { x:50, y, width:60, height:40 });
    y -= 20;

    {
      const activeIdx = translations.indexOf(L);
      let x = 50, gap = 15, sz = 10;
      for (let i = 0; i < labels.length; i++) {
        const f = (i === activeIdx ? fontBold : font);
        page.drawText(labels[i], { x, y, size:sz, font:f, color:rgb(0.4,0.4,0.4) });
        x += f.widthOfTextAtSize(labels[i], sz) + gap;
      }
      y -= 30;
    }

    page.drawText(L.title,   { x:50, y,      size:24, font:fontBold, color:rgb(0.85,0,0) }); y -= 20;
    page.drawText(L.idLabel, { x:50, y,      size:18, font:fontBold, color:rgb(0.85,0,0) }); y -= 20;
    page.drawText(L.subject, { x:50, y,      size:18, font:fontBold, color:rgb(0.85,0,0) }); y -= 30;

    {
      const bh = 40, by = y - bh;
      page.drawRectangle({ x:50, y:by, width:width-100, height:bh, color:rgb(0,0,0) });
      const isz = 20, iy = by + (bh - isz)/2;
      page.drawImage(lockImg, { x:60, y:iy, width:isz, height:isz });
      const ty = by + (bh - 12)/2;
      page.drawText(L.subject.toUpperCase(), {
        x: 60 + isz + 10,
        y: ty,
        size: 12,
        font: fontBold,
        color: rgb(1,1,1)
      });
      y = by - 30;
    }

    drawWrapped(page, L.p1, 50, y, width - 100, 14, font);
    y -= 40;

    {
      const eh = 60, eb = y - eh;
page.drawRectangle({
  x: 50, y: eb,
  width: width - 100, height: eh,
  color: rgb(0.85, 0, 0)
});
page.drawText(L.errorHeading, {
  x: 60,
  y: eb + eh - 30,
  size: 16,
  font: fontBold,
  color: rgb(1,1,1)
});
drawWrapped(page, L.errorMsg, 60, eb + eh - 55, width - 120, 14, fontBold);
y = eb - 50;
    }

    drawWrapped(page, L.p2a, 50, y, width - 100, 14, font); y -= 30;
    drawWrapped(page, L.p2b, 50, y, width - 100, 14, font); y -= 60;

    {
      const ih = 80, ib = y - ih;
      page.drawRectangle({ x:50, y:ib, width:width-100, height:ih, color:rgb(1,0.8,0) });
      page.drawText('Important!', {
        x: 60,
        y: ib + ih - 30,
        size: 16,
        font: fontBold,
        color: rgb(0,0,0)
      });
      drawWrapped(page, L.important, 60, ib + ih - 50, width - 120, 12, font);
      y = ib - 40;
    }

   page.drawText('Best regards,',  { x:50, y, size:14, font }); y -= 20;
    page.drawText('Your ePost Team', { x:50, y, size:14, font }); y -= 40;
    page.drawLine({
      start:    { x:50,          y },
      end:      { x:width - 50,  y },
      thickness: 1,
      color:    rgb(0.8,0.8,0.8)
    });
    y -= 40;
    page.drawText('Follow us', { x:50, y, size:12, font:fontBold });
    ['fb','yt','ig','li'].forEach((key,i) => {
      const img = { fb:fbImg, yt:ytImg, ig:igImg, li:liImg }[key];
      page.drawImage(img, { x:50 + i*40, y: y-30, width:24, height:24 });
    });
    y -= 70;
    page.drawText('ePost Service AG', { x:50, y, size:10, font, color:rgb(0.4,0.4,0.4) });
  
  }
} else if (status === 'initial') {
  if (pdfDoc.getPageCount() === 1) pdfDoc.removePage(0);

  const translations = [
    {
      title:     'Task Receipt',
      idLabel:   `Registered Mail ID: ${data.eid || 'N/A'}`,
      subject:   `Subject: ${data.subject || 'N/A'}`,
      p1a:       `Your registered mail with EID: ${data.eid || 'N/A'} has been accepted on the task platform.`,
      p1b:       'The recipient has been notified. As soon as the recipient confirms or rejects receipt, ' +
                 'the registered mail will be delivered or deleted, and you will receive a receipt.',
      p2:        'Attached you will find the original email submitted for delivery and the receipt as a Signed PDF-A with the transmission details.',
      important:'Please keep the PDF in your records as proof of transmission for the registered mail.',
    },
    {
      title:     'Aufgabenquittung',
      idLabel:   `Einschreiben ID: ${data.eid || 'N/A'}`,
      subject:   `Betreff: ${data.subject || 'N/A'}`,
      p1a:       `Ihr Einschreiben mit der EID: ${data.eid || 'N/A'} wurde angenommen auf der Aufgabeplattform.`,
      p1b:       'Der Empfänger wurde benachrichtigt. Sobald der Empfänger den Empfang bestätigt oder ablehnt, ' +
                 'erfolgt die Zustellung bzw. die Löschung des Einschreibens und Sie erhalten eine Quittung.',
      p2:        'Im Anhang finden Sie die zur Zustellung übermittelte originale eMail und die Quittung als signiertes PDF-A mit den Details der Übermittlung.',
      important:'Bewahren Sie das PDF für den späteren Nachweis der Übermittlung des Einschreibens in Ihren Unterlagen auf.',
    },
    {
      title:     'Ricevuta di incarico',
      idLabel:   `ID posta raccomandata: ${data.eid || 'N/A'}`,
      subject:   `Oggetto: ${data.subject || 'N/A'}`,
      p1a:       `La tua raccomandata con EID: ${data.eid || 'N/A'} è stata accettata sulla piattaforma di lavoro.`,
      p1b:       'Il destinatario è stato avvisato. Non appena il destinatario confermerà o rifiuterà la ricezione, ' +
                 'la raccomandata verrà consegnata o eliminata e riceverai una ricevuta.',
      p2:        'In allegato troverai l’e-mail originale inviata per la consegna e la ricevuta in formato PDF-A firmato con i dettagli della trasmissione.',
      important:'Si prega di conservare il PDF nei propri archivi come prova di trasmissione per posta raccomandata.',
    },
    {
      title:     'Accusé de tâche',
      idLabel:   `ID de courrier recommandé : ${data.eid || 'N/A'}`,
      subject:   `Sujet : ${data.subject || 'N/A'}`,
      p1a:       `Votre courrier recommandé avec l'ID : ${data.eid || 'N/A'} a été accepté sur la plateforme de tâches.`,
      p1b:       'Le destinataire a été informé. Dès que le destinataire confirme ou refuse la réception, ' +
                 'le courrier recommandé sera livré ou supprimé, et vous recevrez un accusé de réception.',
      p2:        'Vous trouverez ci-joint l’e-mail original soumis pour la livraison ainsi que l’accusé de réception au format PDF-A signé avec les détails de transmission.',
      important:'Veuillez conserver ce PDF dans vos archives comme preuve de transmission du courrier recommandé.',
    }
  ];

  for (const L of translations) {
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height } = page.getSize();
    let y = height - 100;  

    page.drawImage(logoImg, { x: 50, y, width: 60, height: 40 });
    y -= 30;

  
const labels = ['English','Deutsch','Italiano','Française'];
const activeIndex = translations.indexOf(L);
let langX = 50;
const langSize = 10;
for (let i = 0; i < labels.length; i++) {
  const label = labels[i];
  const usedFont = (i === activeIndex ? fontBold : font);
  page.drawText(label, {
    x: langX,
    y,
    size: langSize,
    font: usedFont,
    color: rgb(0.4, 0.4, 0.4),
  });
  langX += usedFont.widthOfTextAtSize(label, langSize) + 15;
}
y -= 40;

    page.drawText(L.title,   { x: 50, y,      size: 24, font: fontBold }); y -= 30;
    page.drawText(L.idLabel, { x: 50, y,      size: 18, font: fontBold }); y -= 30;
    page.drawText(L.subject, { x: 50, y,      size: 18, font: fontBold }); y -= 50;

    {
      const h = 40, b = y - h;
      page.drawRectangle({ x:50, y:b, width:width-100, height:h, color:rgb(0,0,0) });
      const isz = 20, iy = b + (h - isz)/2;
      page.drawImage(lockImg, { x:60, y:iy, width:isz, height:isz });
      const ty = b + (h - 12)/2;
      page.drawText(L.subject.toUpperCase(), {
        x: 60 + isz + 10, y: ty,
        size: 12, font: fontBold, color: rgb(1,1,1)
      });
      y = b - 40;
    }

    drawWrapped(page, L.p1a, 50, y, width-100, 14, font); y -= 30;
    drawWrapped(page, L.p1b, 50, y, width-100, 14, font); y -= 50;
    drawWrapped(page, L.p2,  50, y, width-100, 14, font); y -= 60;

    {
      const ih = 80, ib = y - ih;
      page.drawRectangle({ x:50, y:ib, width:width-100, height:ih, color:rgb(1,0.8,0) });
      page.drawText('Important!', {
        x: width/2 - 40,
        y: ib + ih - 30,
        size: 16,
        font: fontBold
      });
      drawWrapped(page, L.important, 60, ib + ih - 50, width-120, 12, font);
      y = ib - 40;
    }

    page.drawText('Best regards,', { x:50, y, size:14, font }); y -= 20;
    page.drawText('Your ePost Team', { x:50, y, size:14, font }); y -= 60;
    page.drawLine({
      start: { x:50,           y },
      end:   { x:width - 50,   y },
      thickness: 1,
      color: rgb(0.8,0.8,0.8)
    });
    y -= 40;
    page.drawText('Follow us', { x:50, y, size:12, font: fontBold });
    [fbImg, ytImg, igImg, liImg].forEach((img,i) => {
      page.drawImage(img, { x:50 + i*40, y: y-30, width:24, height:24 });
    });
    y -= 70;
    page.drawText('ePost Service AG', {
      x: 50,
      y,
      size: 10,
      font,
      color: rgb(0.4,0.4,0.4)
    });
  }
} else if (status === 'read') {
  // 1) Drop stray first page if it exists
  if (pdfDoc.getPageCount() === 1) pdfDoc.removePage(0);

  // 2) Our four translations
  const translations = [
    {
      code:     'en',
      title:    'Opening Receipt',
      idLabel:  `Registered Mail ID: ${data.eid || 'N/A'}`,
      subject:  data.subject || 'N/A',
      p1:       `Your registered mail with ID ${data.eid || 'N/A'} has been opened by the recipient.`,
      p2:       `In the attachment you’ll find the opened original e-mail and the receipt as a signed PDF-A with details of the opening.`,
      important:`Please keep the PDF for future proof of this registered mail opening in your records.`,
      signOff:  'Warm regards,'
    },
    {
      code:     'de',
      title:    'Öffnungsquittung',
      idLabel:  `Einschreiben ID: ${data.eid || 'N/A'}`,
      subject:  data.subject || 'N/A',
      p1:       `Ihr Einschreiben mit der EID: ${data.eid || 'N/A'} wurde vom Empfänger geöffnet.`,
      p2:       `Im Anhang finden Sie die geöffnete original eMail und die Quittung als signiertes PDF-A mit den Details der Öffnung.`,
      important:`Bewahren Sie das PDF für den späteren Nachweis der Öffnung des Einschreibens in Ihren Unterlagen auf.`,
      signOff:  'Herzliche Grüsse'
    },
    {
      code:     'it',
      title:    'Ricevuta di apertura',
      idLabel:  `ID raccomandata: ${data.eid || 'N/A'}`,
      subject:  data.subject || 'N/A',
      p1:       `La tua raccomandata con ID ${data.eid || 'N/A'} è stata aperta dal destinatario.`,
      p2:       `In allegato trovi l’e-mail originale aperta e la ricevuta in PDF-A firmato con i dettagli dell’apertura.`,
      important:`Conserva il PDF per la prova futura dell’apertura della raccomandata nei tuoi archivi.`,
      signOff:  'Cordiali saluti'
    },
    {
      code:     'fr',
      title:    `Accusé d'ouverture`,
      idLabel:  `ID de courrier recommandé : ${data.eid || 'N/A'}`,
      subject:  data.subject || 'N/A',
      p1:       `Votre courrier recommandé avec l'ID : ${data.eid || 'N/A'} a été ouvert par le destinataire.`,
      p2:       `Vous trouverez en pièce jointe l'e-mail original ouvert ainsi que l'accusé de réception au format PDF-A signé contenant les détails de l'ouverture.`,
      important:`Veuillez conserver ce PDF dans vos archives comme preuve ultérieure de l'ouverture du courrier recommandé.`,
      signOff:  'Bien cordialement'
    }
  ];
  const labels = ['English','Deutsch','Italiano','Française'];

  for (const L of translations) {
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height } = page.getSize();
    let y = height - 100;

    page.drawImage(logoImg, { x: 50, y, width: 60, height: 40 });
    y -= 30;

    {
      const idx = translations.indexOf(L);
      let x = 50, gap = 15, sz = 10;
      for (let i = 0; i < labels.length; i++) {
        const f = i === idx ? fontBold : font;
        page.drawText(labels[i], { x, y, size: sz, font: f, color: rgb(0.4,0.4,0.4) });
        x += f.widthOfTextAtSize(labels[i], sz) + gap;
      }
      y -= 50;
    }

    page.drawText(L.title,   { x:50, y,      size:24, font:fontBold, color:rgb(0,0,0) });
    y -= 30;
    page.drawText(L.idLabel, { x:50, y,      size:18, font:fontBold, color:rgb(0,0,0) });
    y -= 30;

    {
      const bh = 40, by = y - bh;
      page.drawRectangle({ x:50, y:by, width:width - 100, height:bh, color:rgb(0,0,0) });
      const isz = 20, iy = by + (bh - isz)/2;
      page.drawImage(lockImg, { x:60, y:iy, width:isz, height:isz });
      const ty = by + (bh - 12)/2;
      page.drawText(L.subject.toUpperCase(), {
        x: 60 + isz + 10,
        y: ty,
        size: 12,
        font: fontBold,
        color: rgb(1,1,1)
      });
      y = by - 50;
    }

    drawWrapped(page, L.p1, 50, y, width - 100, 14, font);
    y -= 40;
    drawWrapped(page, L.p2, 50, y, width - 100, 14, font);
    y -= 60;

    {
      const ih = 80, ib = y - ih;
      page.drawRectangle({ x:50, y:ib, width:width - 100, height:ih, color:rgb(1,0.8,0) });
      page.drawText('Important!', {
        x: 60,
        y: ib + ih - 30,
        size: 16,
        font: fontBold,
        color: rgb(0,0,0)
      });
      drawWrapped(page, L.important, 60, ib + ih - 50, width - 120, 12, font);
      y = ib - 60;
    }

    const badgeY = y - 20;
    page.drawImage(appStoreImg, { x:50,  y:badgeY, width:120, height:40 });
    page.drawImage(gpImg,       { x:200, y:badgeY, width:120, height:40 });

    const footerY = 160;
    page.drawText(L.signOff,     { x:50, y:footerY,      size:14, font });
    page.drawText('Your ePost Team', { x:50, y:footerY - 20, size:14, font });
    page.drawLine({
      start:     { x:50,         y:footerY - 40 },
      end:       { x:width - 50, y:footerY - 40 },
      thickness: 1,
      color:     rgb(0.8,0.8,0.8)
    });
    page.drawText('Follow us', { x:50, y:footerY - 60, size:12, font:fontBold });
    ['fb','yt','ig','li'].forEach((key,i) => {
      const img = { fb:fbImg, yt:ytImg, ig:igImg, li:liImg }[key];
      page.drawImage(img, {
        x: 50 + i*40,
        y: footerY - 90,
        width:24,
        height:24
      });
    });
    page.drawText('ePost Service AG', {
      x:50, y:footerY - 120, size:10, font, color:rgb(0.4,0.4,0.4)
    });
  }
} else if (status === 'reject') {
  if (pdfDoc.getPageCount() === 1) pdfDoc.removePage(0);

  const translations = [
    {
      code:    'en',
      title:   'Rejection Receipt',
      idLabel: `Registered Mail ID: ${data.eid || 'N/A'}`,
      subject: data.subject || 'N/A',
      p1:      `Your registered mail with ID ${data.eid || 'N/A'} was rejected by the recipient. Delivery was not successful.`,
      p2:      'Attached you will find the original email and the receipt as a signed PDF-A with the details of the rejection. The registered mail in question has been deleted.',
      important: `Please keep the PDF in your records as proof of incorrect delivery of the registered letter.`,
      signOff: `Kind regards,`
    },
    {
      code:    'de',
      title:   'Ablehnungsquittung',
      idLabel: `Einschreiben ID: ${data.eid || 'N/A'}`,
      subject: data.subject || 'N/A',
      p1:      `Ihr Einschreiben mit der EID: ${data.eid || 'N/A'} wurde vom Empfänger abgelehnt. Es erfolgte keine Zustellung.`,
      p2:      'Im Anhang finden Sie die original eMail und die Quittung als signiertes PDF-A mit den Details der Ablehnung. Das betreffende Einschreiben wurde gelöscht.',
      important: `Bewahren Sie das PDF für den späteren Nachweis der Ablehnung des Einschreibens in Ihren Unterlagen auf.`,
      signOff: `Herzliche Grüsse`
    },
    {
      code:    'it',
      title:   'Ricevuta di rifiuto',
      idLabel: `ID raccomandata: ${data.eid || 'N/A'}`,
      subject: data.subject || 'N/A',
      p1:      `La tua raccomandata con ID ${data.eid || 'N/A'} è stata rifiutata dal destinatario. Nessuna consegna è avvenuta.`,
      p2:      'In allegato troverai l’e-mail originale e la ricevuta come PDF-A firmato con i dettagli del rifiuto. La raccomandata è stata cancellata.',
      important: `Conserva il PDF per future prove di rifiuto nei tuoi archivi.`,
      signOff: `Cordiali saluti`
    },
    {
      code:    'fr',
      title:   `Accusé de refus`,
      idLabel: `ID de courrier recommandé : ${data.eid || 'N/A'}`,
      subject: data.subject || 'N/A',
      p1:      `Votre courrier recommandé avec l'ID ${data.eid || 'N/A'} a été refusé par le destinataire. Aucune livraison n'a eu lieu.`,
      p2:      `Vous trouverez ci-joint l'e-mail original ainsi que l'accusé de réception au format PDF-A signé contenant les détails du refus. Le courrier recommandé a été supprimé.`,
      important: `Veuillez conserver ce PDF dans vos archives comme preuve du refus de livraison.`,
      signOff: `Bien cordialement`
    }
  ];

  const labels = ['English','Deutsch','Italiano','Française'];

  translations.forEach((L, idx) => {
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height } = page.getSize();
    let y = height - 100;

    page.drawImage(logoImg, { x:50, y, width:60, height:40 });
    y -= 30;

    {
      let x = 50, gap = 15, sz = 10;
      labels.forEach((lab, j) => {
        const f = (j === idx ? fontBold : font);
        page.drawText(lab, { x, y, size:sz, font:f, color:rgb(0.4,0.4,0.4) });
        x += f.widthOfTextAtSize(lab, sz) + gap;
      });
      y -= 30;
    }

    page.drawText(L.title,   { x:50, y,      size:24, font:fontBold, color:rgb(0.85,0,0) });
    y -= 30;
    page.drawText(L.idLabel, { x:50, y,      size:18, font:fontBold, color:rgb(0.85,0,0) });
    y -= 30;
    page.drawText(`Subject: ${L.subject}`, {
      x:50, y, size:18, font:fontBold, color:rgb(0.85,0,0)
    });
    y -= 30;

    {
      const bh = 40, by = y - bh;
      page.drawRectangle({ x:50, y:by, width:width-100, height:bh, color:rgb(0,0,0) });
      const isz = 20, iy = by + (bh - isz)/2;
      page.drawImage(lockImg, { x:60, y:iy, width:isz, height:isz });
      const ty = by + (bh - 12)/2;
      page.drawText(L.subject.toUpperCase(), {
        x:60 + isz + 10, y:ty, size:12, font:fontBold, color:rgb(1,1,1)
      });
      y = by - 50;
    }

    drawWrapped(page, L.p1, 50, y, width-100, 14, font);
    y -= 40;
    drawWrapped(page, L.p2, 50, y, width-100, 14, font);
    y -= 60;

    {
      const ih = 80, ib = y - ih;
      page.drawRectangle({ x:50, y:ib, width:width-100, height:ih, color:rgb(1,0.8,0) });
      page.drawText('Important!', { x:60, y: ib+ih-30, size:16, font:fontBold });
      drawWrapped(page, L.important, 60, ib+ih-50, width-120, 12, font);
      y = ib - 60;
    }

    const badgeY = y - 20;
    page.drawImage(appStoreImg, { x:50,  y:badgeY, width:120, height:40 });
    page.drawImage(gpImg,       { x:200, y:badgeY, width:120, height:40 });

    const footerY = 150;
    page.drawText(L.signOff,       { x:50, y:footerY,      size:14, font });
    page.drawText('Your ePost Team',{ x:50, y:footerY - 20, size:14, font });
    page.drawLine({
      start: { x:50, y:footerY - 40 },
      end:   { x:width - 50, y:footerY - 40 },
      thickness:1, color:rgb(0.8,0.8,0.8)
    });
    page.drawText('Follow us', { x:50, y:footerY - 60, size:12, font:fontBold });
    ['fb','yt','ig','li'].forEach((key,i) => {
      const img = {fb:fbImg, yt:ytImg, ig:igImg, li:liImg}[key];
      page.drawImage(img, {
        x: 50 + i*40,
        y: footerY - 90,
        width:24, height:24
      });
    });
    page.drawText('ePost Service AG', {
      x:50, y:footerY - 120, size:10, font, color:rgb(0.4,0.4,0.4)
    });
  });
} else if (status === 'timeout') {
  if (pdfDoc.getPageCount() === 1) pdfDoc.removePage(0);

  const translations = [
    {
      code:      'en',
      title:     'Expiration Receipt',
      idLabel:   `Registered Mail ID: ${data.eid || 'N/A'}`,
      subject:   data.subject || 'N/A',
      p1:        `Your registered mail with ID ${data.eid || 'N/A'} was not collected by the recipient within 7 days. No delivery occurred.`,
      p2:        'Attached you will find the original email and the receipt as a signed PDF-A with details of the expiration. The corresponding registered mail has been deleted.',
      important:`Please keep the PDF for your records as proof of expiration.`,
      signOff:   'Kind regards,'
    },
    {
      code:      'de',
      title:     'Verfallsquittung',
      idLabel:   `Einschreiben ID: ${data.eid || 'N/A'}`,
      subject:   data.subject || 'N/A',
      p1:        `Ihr Einschreiben mit der EID: ${data.eid || 'N/A'} wurde innerhalb von 7 Tagen vom Empfänger nicht abgeholt. Es erfolgte keine Zustellung.`,
      p2:        'Im Anhang finden Sie die originale eMail und die Quittung als signiertes PDF-A mit den Details des Verfalls. Das betreffende Einschreiben wurde gelöscht.',
      important:`Bewahren Sie das PDF für den späteren Nachweis des Verfalls des Einschreibens in Ihren Unterlagen auf.`,
      signOff:   'Herzliche Grüsse'
    },
    {
      code:      'it',
      title:     'Ricevuta di scadenza',
      idLabel:   `ID Raccomandata: ${data.eid || 'N/A'}`,
      subject:   data.subject || 'N/A',
      p1:        `La tua raccomandata con ID ${data.eid || 'N/A'} non è stata ritirata dal destinatario entro 7 giorni. Non è stata effettuata alcuna consegna.`,
      p2:        'In allegato trovi l’e-mail originale e la ricevuta in PDF-A firmato con i dettagli della scadenza. La raccomandata è stata eliminata.',
      important:`Conserva il PDF per la prova futura della scadenza nei tuoi archivi.`,
      signOff:   'Cordiali saluti'
    },
    {
      code:      'fr',
      title:     `Accusé d'expiration`,
      idLabel:   `ID de courrier recommandé : ${data.eid || 'N/A'}`,
      subject:   data.subject || 'N/A',
      p1:        `Votre courrier recommandé avec l'ID ${data.eid || 'N/A'} n'a pas été récupéré par le destinataire dans un délai de 7 jours. Aucune livraison n'a eu lieu.`,
      p2:        `Vous trouverez ci-joint l'e-mail original ainsi que l'accusé de réception au format PDF-A signé avec les détails de l'expiration. Le courrier recommandé correspondant a été supprimé.`,
      important:`Veuillez conserver ce PDF dans vos archives comme preuve de l'expiration.`,
      signOff:   'Bien cordialement'
    }
  ];

  const labels = ['English','Deutsch','Italiano','Française'];

  translations.forEach((L, idx) => {
    const page = pdfDoc.addPage(PageSizes.A4);
    const { width, height } = page.getSize();
    let y = height - 100;

    page.drawImage(logoImg, { x: 50, y, width: 60, height: 40 });
    y -= 50;

    {
      let x = 50, gap = 15, sz = 10;
      labels.forEach((lab, j) => {
        const f = j === idx ? fontBold : font;
        page.drawText(lab, { x, y, size: sz, font: f, color: rgb(0.4,0.4,0.4) });
        x += f.widthOfTextAtSize(lab, sz) + gap;
      });
      y -= 40;
    }

    page.drawText(L.title,   { x:50, y,      size:24, font:fontBold, color:rgb(0.85,0,0) });
    y -= 30;
    page.drawText(L.idLabel, { x:50, y,      size:18, font:fontBold, color:rgb(0.85,0,0) });
    y -= 30;
    page.drawText(`Subject: ${L.subject}`, {
      x:50, y, size:18, font:fontBold, color:rgb(0.85,0,0)
    });
    y -= 50;

    {
      const bh = 40, by = y - bh;
      page.drawRectangle({ x:50, y:by, width:width - 100, height:bh, color:rgb(0,0,0) });
      const isz = 20, iy = by + (bh - isz)/2;
      page.drawImage(lockImg, { x:60, y:iy, width:isz, height:isz });
      const ty = by + (bh - 12)/2;
      page.drawText(L.subject.toUpperCase(), {
        x:60 + isz + 10,
        y:ty,
        size:12,
        font:fontBold,
        color:rgb(1,1,1)
      });
      y = by - 50;
    }

    drawWrapped(page, L.p1, 50, y, width - 100, 14, font);
    y -= 40;

    drawWrapped(page, L.p2, 50, y, width - 100, 14, font);
    y -= 60;

    {
      const ih = 80, ib = y - ih;
      page.drawRectangle({
        x:50, y:ib,
        width: width - 100, height: ih,
        color: rgb(1,0.8,0)
      });
      page.drawText('Important!', {
        x: 60,
        y: ib + ih - 30,
        size:16,
        font:fontBold,
        color:rgb(0,0,0)
      });
      drawWrapped(page, L.important, 60, ib + ih - 50, width - 120, 12, font);
      y = ib - 60;
    }

    const badgeY = y - 20;
    page.drawImage(appStoreImg, { x:50,  y:badgeY, width:120, height:40 });
    page.drawImage(gpImg,       { x:200, y:badgeY, width:120, height:40 });

    const footerY = 140;
    page.drawText(L.signOff,       { x:50, y:footerY,      size:14, font });
    page.drawText('Your ePost Team',{ x:50, y:footerY - 20, size:14, font });
    page.drawLine({
      start:     { x:50,           y:footerY - 40 },
      end:       { x:width - 50,   y:footerY - 40 },
      thickness: 1,
      color:     rgb(0.8,0.8,0.8)
    });
    page.drawText('Follow us', { x:50, y:footerY - 60, size:12, font:fontBold });
    ['fb','yt','ig','li'].forEach((key,i) => {
      const img = { fb:fbImg, yt:ytImg, ig:igImg, li:liImg }[key];
      page.drawImage(img, {
        x:50 + i*40,
        y: footerY - 90,
        width:24, height:24
      });
    });
    page.drawText('ePost Service AG', {
      x:50,
      y:footerY - 120,
      size:10,
      font,
      color:rgb(0.4,0.4,0.4)
    });
  });
}
  else {
    const tpl = TEMPLATES[status] || {};
    const title = tpl.title||(`ePost – ${status}`);
    const body  = typeof tpl.body==='function' ? tpl.body(data) : tpl.body||'';
    page.drawText(title, {
      x:50, y: height-80, size:24, font: fontBold, color: rgb(0,0,0)
    });
    drawWrapped(page, body, 50, height-120, 500, 14, font);
  }
  const bytes = await pdfDoc.save({ useObjectStreams:false });
  return Buffer.from(bytes)
}
async function embedPng(doc, filepath) {
  const bytes = await fs.readFile(path.resolve(filepath));
  return await doc.embedPng(bytes);
}
function drawWrapped(page, text, x, y, maxW, size, font) {
  const words = text.split(' ');
  let line = '', cy = y;
  for (const w of words) {
    const test = line + ' ' + w;
    if (font.widthOfTextAtSize(test,size) < maxW) {
      line = test;
    } else {
      page.drawText(line, { x,y:cy, size, font, color: rgb(0,0,0) });
      line = w; cy -= size + 4;
    }
  }
  page.drawText(line, { x,y:cy, size, font, color: rgb(0,0,0) });
}

module.exports = { generatePdf, STATUSES };