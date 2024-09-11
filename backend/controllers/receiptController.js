


// const { PDFDocument, rgb } = require('pdf-lib');

// Create and save receipt, generate PDF
// exports.createReceipt = async (req, res) => {
//   const { gaddiNumber, partyName, privateMarka, date } = req.body;

//   try {
//     // Create a new PDF document
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 400]);

//     // Define colors
//     const headerBackgroundColor = rgb(1, 1, 0); // Yellow
//     const textColor = rgb(0, 0, 0); // Black

//     // Draw header background
//     page.drawRectangle({
//       x: 0,
//       y: 330,
//       width: 600,
//       height: 40,
//       color: headerBackgroundColor,
//     });

//     // Draw centered header text using the default font
//     page.drawText('INTERSTATE TRANSPORT', {
//       x: page.getWidth() / 2 - 150, // Adjust to center text
//       y: 345,
//       size: 24,
//       color: textColor,
//     });

//     // Draw a horizontal line under the header
//     page.drawLine({
//       start: { x: 50, y: 325 },
//       end: { x: 550, y: 325 },
//       thickness: 1,
//       color: textColor
//     });

//     // Draw a colored rectangle for the details section
//     const detailsBackgroundColor = rgb(1, 1, 0.8); // Light yellow
//     page.drawRectangle({
//       x: 0,
//       y: 0,
//       width: 600,
//       height: 320,
//       color: detailsBackgroundColor,
//     });

//     // Bill Details
//     const details = [
//       { label: 'Gaddi Number:', value: gaddiNumber },
//       { label: 'Party Name:', value: partyName },
//       { label: 'Private Marka:', value: privateMarka },
//       { label: 'Date:', value: new Date(date).toLocaleDateString() }
//     ];

//     // Draw the bill details
//     let y = 290;
//     details.forEach(detail => {
//       page.drawText(detail.label, { x: 50, y, size: 18, color: textColor });
//       page.drawText(detail.value, { x: 250, y, size: 18, color: textColor });
//       y -= 30; // Move down for the next detail
//     });

//     // Save PDF document to bytes
//     const pdfBytes = await pdfDoc.save();

//     // Send PDF response
//     res.set({
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="receipt.pdf"',
//       'Content-Length': pdfBytes.length
//     });

//     res.send(Buffer.from(pdfBytes));
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };




// const { PDFDocument, rgb } = require('pdf-lib');

// // Create and save receipt, generate PDF
// exports.createReceipt = async (req, res) => {
//   const { gaddiNumber, partyName, privateMarka, date } = req.body;

//   try {
//     // Create a new PDF document
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage([600, 400]);

//     // Define colors with opacity
//     const headerBackgroundColor = rgb(0.1, 0.7, 1); // Blue with opacity
//     const detailsBackgroundColor = rgb(0.9, 0.9, 0.2); // Light Yellow with opacity
//     const textColor = rgb(0, 0, 0); // Black
//     const borderColor = rgb(1, 0, 0); // Red

//     // Draw header background with opacity
//     page.drawRectangle({
//       x: 0,
//       y: 340,
//       width: 600,
//       height: 50,
//       color: headerBackgroundColor,
//       borderColor: borderColor,
//       borderWidth: 2,
//     });

//     // Draw centered header text using the default font
//     page.drawText('INTERSTATE TRANSPORT', {
//       x: page.getWidth() / 2 - 180, // Adjust to center text
//       y: 355,
//       size: 28,
//       color: rgb(1, 1, 1), // White
//     });

//     // Draw a colorful rectangle for the details section with opacity
//     page.drawRectangle({
//       x: 0,
//       y: 0,
//       width: 600,
//       height: 340,
//       color: detailsBackgroundColor,
//       borderColor: borderColor,
//       borderWidth: 2,
//     });

//     // Draw bill details with different colors and add borders
//     const details = [
//       { label: 'Gaddi Number:', value: gaddiNumber, color: rgb(0.2, 0.6, 0.1) }, // Dark Green
//       { label: 'Party Name:', value: partyName, color: rgb(0.1, 0.4, 0.7) }, // Dark Blue
//       { label: 'Private Marka:', value: privateMarka, color: rgb(0.8, 0.4, 0.1) }, // Orange
//       { label: 'Date:', value: new Date(date).toLocaleDateString(), color: rgb(0.6, 0.2, 0.8) } // Purple
//     ];

//     // Draw the bill details with borders
//     let y = 290;
//     details.forEach(detail => {
//       // Draw the label with border
//       page.drawRectangle({
//         x: 30,
//         y: y - 15,
//         width: 200,
//         height: 25,
//         color: rgb(1, 1, 1), // Light white background with opacity
//         borderColor: borderColor,
//         borderWidth: 1,
//       });
//       page.drawText(detail.label, { x: 50, y, size: 20, color: textColor });

//       // Draw the value with border
//       page.drawRectangle({
//         x: 250,
//         y: y - 15,
//         width: 300,
//         height: 25,
//         color: rgb(1, 1, 1), // Light white background with opacity
//         borderColor: borderColor,
//         borderWidth: 1,
//       });
//       page.drawText(detail.value, { x: 270, y, size: 20, color: detail.color });

//       y -= 40; // Move down for the next detail
//     });

//     // Draw a footer with a different background color and opacity
//     page.drawRectangle({
//       x: 0,
//       y: -20,
//       width: 600,
//       height: 20,
//       color: rgb(0.9, 0.1, 0.1) // Red with opacity
//     });

//     // Draw footer text
//     page.drawText('Thank you for choosing Interstate Transport!', {
//       x: page.getWidth() / 2 - 180, // Center text
//       y: -10,
//       size: 14,
//       color: rgb(1, 1, 1), // White
//     });

//     // Save PDF document to bytes
//     const pdfBytes = await pdfDoc.save();

//     // Send PDF response
//     res.set({
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename="receipt.pdf"',
//       'Content-Length': pdfBytes.length
//     });

//     res.send(Buffer.from(pdfBytes));
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



const { PDFDocument, rgb } = require('pdf-lib');

// Create and save receipt, generate PDF
exports.createReceipt = async (req, res) => {
  const { gaddiNumber, partyName, privateMarka, date } = req.body;

  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    // Define colors
    const headerBackgroundColor = rgb(0.1, 0.7, 1); // Blue
    const detailsBackgroundColor = rgb(1, 1, 0.6); // Light Yellow
    const textColor = rgb(0, 0, 0); // Black
    const borderColor = rgb(1, 0, 0); // Red

    // Draw header background
    page.drawRectangle({
      x: 0,
      y: 340,
      width: 600,
      height: 50,
      color: headerBackgroundColor,
      borderColor: borderColor,
      borderWidth: 2,
    });

    // Draw centered header text using the default font
    page.drawText('INTERSTATE TRANSPORT', {
      x: 300 - 180, // Center text
      y: 355,
      size: 28,
      color: rgb(1, 1, 1), // White
      align: 'center'
    });

    // Draw a colorful rectangle for the details section
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 600,
      height: 340,
      color: detailsBackgroundColor,
      borderColor: borderColor,
      borderWidth: 2,
    });

    // Draw bill details with different colors and add borders
    const details = [
      { label: 'Gaddi Number:', value: gaddiNumber, color: rgb(0.2, 0.6, 0.1) }, // Dark Green
      { label: 'Party Name:', value: partyName, color: rgb(0.1, 0.4, 0.7) }, // Dark Blue
      { label: 'Private Marka:', value: privateMarka, color: rgb(0.8, 0.4, 0.1) }, // Orange
      { label: 'Date:', value: new Date(date).toLocaleDateString(), color: rgb(0.6, 0.2, 0.8) } // Purple
    ];

    // Draw the bill details with borders
    const labelWidth = 200;
    const valueWidth = 300;
    const labelHeight = 30;
    const yStart = 290;
    const xLabelStart = (page.getWidth() - (labelWidth + valueWidth)) / 2; // Centered horizontally
    const xValueStart = xLabelStart + labelWidth;

    let y = yStart;
    details.forEach(detail => {
      // Draw the label with border
      page.drawRectangle({
        x: xLabelStart,
        y: y - 20, // Adjusted y position for rectangle
        width: labelWidth,
        height: labelHeight,
        color: rgb(1, 1, 1), // White background
        borderColor: borderColor,
        borderWidth: 1,
      });

      // Draw the label text
      page.drawText(detail.label, { x: xLabelStart + 10, y: y - 5, size: 20, color: textColor });

      // Draw the value with border
      page.drawRectangle({
        x: xValueStart,
        y: y - 20, // Adjusted y position for rectangle
        width: valueWidth,
        height: labelHeight,
        color: rgb(1, 1, 1), // White background
        borderColor: borderColor,
        borderWidth: 1,
      });

      // Draw the value text
      page.drawText(detail.value, { x: xValueStart + 10, y: y - 5, size: 20, color: detail.color });

      y -= 40; // Move down for the next detail
    });

    // Draw a footer with a different background color
    page.drawRectangle({
      x: 0,
      y: -20,
      width: 600,
      height: 20,
      color: rgb(0.9, 0.1, 0.1), // Red
    });

    // Draw footer text
    page.drawText('Thank you for choosing Interstate Transport!', {
      x: 300 - 180, // Center text
      y: -10,
      size: 14,
      color: rgb(1, 1, 1), // White
      align: 'center'
    });

    // Save PDF document to bytes
    const pdfBytes = await pdfDoc.save();

    // Send PDF response
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="receipt.pdf"',
      'Content-Length': pdfBytes.length
    });

    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
