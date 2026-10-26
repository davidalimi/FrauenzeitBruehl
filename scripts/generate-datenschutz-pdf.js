import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 in points
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const margin = 50;
  const contentWidth = width - 2 * margin;
  let y = height - 50;

  // Title centered
  const title = 'PATIENTENINFORMATION ZUM DATENSCHUTZ';
  const titleWidth = fontBold.widthOfTextAtSize(title, 14);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y,
    size: 14,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });

  y -= 20;

  // Subtitle centered
  const headerLines = [
    { text: 'FrauenzeitBrühl', font: fontBold, size: 11 },
    { text: 'Gynäkologische Gemeinschaftspraxis', font: fontRegular, size: 9.5 },
    { text: 'Dr. med. Anika Birkenfeld & Dr. med. Corinna Ledwig', font: fontBold, size: 9.5 },
    { text: 'Fachärztinnen für Frauenheilkunde und Geburtshilfe', font: fontRegular, size: 9 },
    { text: 'Mühlenstraße 37 · 50321 Brühl', font: fontRegular, size: 9 },
  ];

  for (const line of headerLines) {
    const lineWidth = line.font.widthOfTextAtSize(line.text, line.size);
    page.drawText(line.text, {
      x: (width - lineWidth) / 2,
      y,
      size: line.size,
      font: line.font,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 13;
  }

  y -= 8;

  function wrapText(text, maxWidth, font, size) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  function drawParagraph(text, font, size, lineHeight, indent = 0) {
    const lines = wrapText(text, contentWidth - indent, font, size);
    for (const l of lines) {
      page.drawText(l, {
        x: margin + indent,
        y,
        size,
        font,
        color: rgb(0.15, 0.15, 0.15),
      });
      y -= lineHeight;
    }
  }

  // Intro
  page.drawText('Liebe Patientin,', {
    x: margin,
    y,
    size: 9.5,
    font: fontBold,
    color: rgb(0.15, 0.15, 0.15),
  });
  y -= 13;

  drawParagraph(
    'zum 01.10.2026 übernehmen wir, Dr. med. Anika Birkenfeld und Dr. med. Corinna Ledwig, die gynäkologische Praxis von Frau Sabine Latta und führen diese als gemeinsame Berufsausübungsgemeinschaft unter dem Namen FrauenzeitBrühl weiter. Damit wir Sie kontinuierlich und umfassend betreuen können, möchten wir auf die bereits vorhandenen Behandlungsunterlagen und Befunde zurückgreifen.',
    fontRegular,
    8.5,
    11.5
  );

  y -= 8;

  // Section 1
  page.drawText('1. EINWILLIGUNG ZUR NUTZUNG DER BISHERIGEN BEHANDLUNGSUNTERLAGEN', {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 13;

  drawParagraph(
    'Hiermit erkläre ich mich damit einverstanden, dass die in der bisherigen Praxis von Frau Sabine Latta über mich vorhandenen Behandlungsunterlagen, Befunde und sonstigen medizinischen Informationen von Dr. med. Anika Birkenfeld und Dr. med. Corinna Ledwig im Rahmen meiner weiteren medizinischen Behandlung eingesehen und genutzt werden dürfen.',
    fontRegular,
    8.5,
    11.5
  );

  y -= 4;

  // Checkbox 1
  page.drawRectangle({
    x: margin + 15,
    y: y - 1,
    width: 9,
    height: 9,
    borderColor: rgb(0.15, 0.15, 0.15),
    borderWidth: 1,
  });

  const cb1Text = 'Ich willige in die Nutzung meiner bisher in der Praxis vorhandenen Behandlungsunterlagen durch Dr. med. Anika Birkenfeld und Dr. med. Corinna Ledwig ein.';
  const cb1Lines = wrapText(cb1Text, contentWidth - 35, fontBold, 8.5);
  for (const l of cb1Lines) {
    page.drawText(l, {
      x: margin + 30,
      y,
      size: 8.5,
      font: fontBold,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 11.5;
  }

  y -= 8;

  // Section 2
  page.drawText('2. DATENSCHUTZ', {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 13;

  drawParagraph(
    'Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zur Durchführung und Dokumentation Ihrer medizinischen Behandlung sowie zur Erfüllung gesetzlicher und vertraglicher Verpflichtungen. Hierzu gehören insbesondere Anamnese, Diagnosen, Befunde, Untersuchungsergebnisse, Therapien sowie medizinische Unterlagen anderer behandelnder Ärztinnen und Ärzte.',
    fontRegular,
    8.5,
    11.5
  );
  y -= 4;

  drawParagraph(
    'Die Verarbeitung erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO), des Bundesdatenschutzgesetzes (BDSG) und der für die ärztliche Behandlung geltenden gesetzlichen Vorschriften. Gesundheitsdaten sind besonders geschützt.',
    fontRegular,
    8.5,
    11.5
  );
  y -= 4;

  drawParagraph(
    'Daten können, soweit dies für Behandlung, Abrechnung oder aufgrund gesetzlicher Verpflichtungen erforderlich ist, insbesondere an mitbehandelnde Ärztinnen und Ärzte, Krankenhäuser, Labore, Psychotherapeutinnen und Psychotherapeuten, Hebammen, Krankenkassen, die Kassenärztliche Vereinigung Nordrhein, den Medizinischen Dienst, die Ärztekammer sowie privatärztliche Abrechnungsstellen übermittelt werden. Die ärztliche Schweigepflicht bleibt gewahrt.',
    fontRegular,
    8.5,
    11.5
  );
  y -= 4;

  drawParagraph(
    'Ihre Behandlungsunterlagen werden entsprechend den gesetzlichen Aufbewahrungspflichten aufbewahrt. Ärztliche Aufzeichnungen sind grundsätzlich mindestens 10 Jahre nach Abschluss der Behandlung aufzubewahren; für bestimmte Unterlagen können längere Fristen gelten.',
    fontRegular,
    8.5,
    11.5
  );
  y -= 4;

  drawParagraph(
    'Ihre Rechte: Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft, Berichtigung, Löschung (soweit keine Aufbewahrungspflicht entgegensteht), Einschränkung der Verarbeitung, Datenübertragbarkeit und – soweit vorgesehen – Widerspruch. Eine erteilte Einwilligung können Sie mit Wirkung für die Zukunft widerrufen. Zudem besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.',
    fontRegular,
    8.5,
    11.5
  );

  y -= 8;

  // Section 3
  page.drawText('3. ABHOLUNG VON UNTERLAGEN DURCH DRITTE', {
    x: margin,
    y,
    size: 9,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1),
  });
  y -= 13;

  // Checkbox 2
  page.drawRectangle({
    x: margin,
    y: y - 1,
    width: 9,
    height: 9,
    borderColor: rgb(0.15, 0.15, 0.15),
    borderWidth: 1,
  });

  const cb2Text = 'Ich erlaube, dass Rezepte, Überweisungen, Einweisungen, Arbeitsunfähigkeitsbescheinigungen und sonstige Unterlagen durch von mir benannte bzw. hierzu berechtigte Personen (z. B. Ehepartner/in, Lebenspartner/in oder Familienangehörige) abgeholt werden dürfen. Diese Einwilligung kann ich jederzeit mit Wirkung für die Zukunft widerrufen.';
  const cb2Lines = wrapText(cb2Text, contentWidth - 18, fontRegular, 8.5);
  let firstCbLine = true;
  for (const l of cb2Lines) {
    page.drawText(l, {
      x: margin + 15,
      y,
      size: 8.5,
      font: fontRegular,
      color: rgb(0.15, 0.15, 0.15),
    });
    y -= 11.5;
  }

  y -= 16;

  // Form Fields
  const col1X = margin;
  const col2X = margin + 255;
  const lineLength = 230;

  // Row 1: Name & Vorname
  page.drawText('Name:', { x: col1X, y, size: 8.5, font: fontBold });
  page.drawLine({
    start: { x: col1X + 35, y: y - 1 },
    end: { x: col1X + lineLength, y: y - 1 },
    thickness: 0.75,
    color: rgb(0.3, 0.3, 0.3),
  });

  page.drawText('Vorname:', { x: col2X, y, size: 8.5, font: fontBold });
  page.drawLine({
    start: { x: col2X + 48, y: y - 1 },
    end: { x: margin + contentWidth, y: y - 1 },
    thickness: 0.75,
    color: rgb(0.3, 0.3, 0.3),
  });

  y -= 18;

  // Row 2: Geburtsdatum & Ort, Datum
  page.drawText('Geburtsdatum:', { x: col1X, y, size: 8.5, font: fontBold });
  page.drawLine({
    start: { x: col1X + 70, y: y - 1 },
    end: { x: col1X + lineLength, y: y - 1 },
    thickness: 0.75,
    color: rgb(0.3, 0.3, 0.3),
  });

  page.drawText('Ort, Datum:', { x: col2X, y, size: 8.5, font: fontBold });
  page.drawLine({
    start: { x: col2X + 55, y: y - 1 },
    end: { x: margin + contentWidth, y: y - 1 },
    thickness: 0.75,
    color: rgb(0.3, 0.3, 0.3),
  });

  y -= 26;

  // Row 3: Unterschriften
  page.drawLine({
    start: { x: col1X, y: y + 10 },
    end: { x: col1X + lineLength, y: y + 10 },
    thickness: 0.75,
    color: rgb(0.3, 0.3, 0.3),
  });
  page.drawText('Unterschrift Patientin', { x: col1X, y, size: 8, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  page.drawLine({
    start: { x: col2X, y: y + 10 },
    end: { x: margin + contentWidth, y: y + 10 },
    thickness: 0.75,
    color: rgb(0.3, 0.3, 0.3),
  });
  page.drawText('ggf. gesetzliche/r Vertreter/in', { x: col2X, y, size: 8, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });

  const pdfBytes = await pdfDoc.save();
  const outDir = path.resolve('public/assets/docs');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outFile = path.join(outDir, 'patienteninformation-datenschutz.pdf');
  fs.writeFileSync(outFile, pdfBytes);
  console.log(`Saved PDF to ${outFile} (${pdfBytes.length} bytes)`);
}

generatePDF().catch(console.error);
