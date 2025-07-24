// registered-pdf-generation.js
'use strict';

const { PDFDocument, StandardFonts, rgb, PageSizes } = require('pdf-lib');

async function generatePdf({
  title = 'ePost registered',
  body = 'This is a registered mail!',
} = {}) {
  const pdfDoc = await PDFDocument.create();
  const page   = pdfDoc.addPage(PageSizes.A4);
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Header
  page.drawText(title, { x: 50, y: height - 80, size: 24, font, color: rgb(0, 0, 0) });

  // Body
  drawMultilineText(page, body, {
    x: 50, y: height - 120, font, size: 12, maxWidth: 500, lineHeight: 16
  });

  // -> bytes -> base64
  const bytes   = await pdfDoc.save({ useObjectStreams: false });
  const pdfBytes  = Buffer.from(bytes)
  return pdfBytes;
}

function drawMultilineText(page, text, { x, y, font, size, maxWidth, lineHeight }) {
  const lines = wrapText(text, font, size, maxWidth);
  let cursorY = y;
  for (const line of lines) {
    page.drawText(line, { x, y: cursorY, font, size });
    cursorY -= lineHeight;
  }
}

function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (font.widthOfTextAtSize(test, size) <= maxWidth) line = test;
    else { if (line) lines.push(line); line = w; }
  }
  if (line) lines.push(line);
  return lines;
}

module.exports = { generatePdf };
