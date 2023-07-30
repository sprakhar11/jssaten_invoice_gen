const fs = require('fs');
const PDFDocument = require('pdfkit');

function addWatermarkToPDF(doc, watermarkImagePath, pageWidth, pageHeight) {
    const watermarkImage = fs.readFileSync(watermarkImagePath);
  
    const watermarkImageWidth = doc.page.width;
    const watermarkImageHeight = doc.page.height;
  
    const positionX = (pageWidth ) / 2;
    const positionY = (pageHeight) / 2;
  
    console.log(pageWidth, pageWidth)
    console.log(watermarkImageHeight, watermarkImageWidth);
    console.log(positionX, positionY);
    doc.image(watermarkImage, positionX - 160, positionY - 200);
  
  }

  function drawLine(doc, startX, startY, endX, endY) {
    return new Promise((resolve, reject) => {
      doc.moveTo(startX, startY)
        .lineTo(endX, endY)
        .stroke();
      resolve();
    });
  }

  module.exports = addWatermarkToPDF;