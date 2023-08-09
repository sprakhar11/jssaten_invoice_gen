const fs = require('fs');
const PDFDocument = require('pdfkit');
var generateTablemid = require('./generateTablemid.js');
var generateTable = require('./generateTable.js');
var addWatermarkToPDF = require('./addWatermarkToPDF.js');
var generateTableLast = require('./generateTableLast.js');
var convertRupeesIntoWords = require('convert-rupees-into-words');


var output = convertRupeesIntoWords(35116);

console.log(output);




async function generateHeader(doc) {
	doc.image('./files/logo_left.png', 50, 50, { width: 100 })
        .image('./files/logo_right.png', 595 - 150, 60, { width: 100 })
        .font('./files/cambria/cambriab.ttf' )
        .fillColor('#444444')
        .fontSize(11.1)
        .text('JSS MAHAVIDYAPEETHA', { align : 'center' })
        // .moveDown()
    
    doc.font('./files/cambria/cambriab.ttf')
        .fillColor('#444444')
        .fontSize(12.8)
        .text('JSS Academy of Technical Education', { align : 'center'})
    

    doc.font('./files/cambria/cambria.ttf')
        .fillColor('#444444')
        .fontSize(12.8)
        .text('C-20/1, Sector-62/NOIDA, G.B. Nagar, U.P. 201301', { align : 'center'})
        .text('0120-2400104,115', { align : 'center'})
        .text('www.jssaten.ac.in', { align : 'center'})
        .moveDown()

    drawLine(doc, 50, 160, 545, 160);
    
    
    doc.font('./files/cambria/cambriab.ttf')
    .fillColor('#444444')
    .text('Salary Slip  (Feb 2017)', { align : 'center'})
    .fontSize(12.8)
    
    drawLine(doc, 50, 175, 545, 175); 
		
}
function drawLine(doc, startX, startY, endX, endY) {
  return new Promise((resolve, reject) => {
    doc.moveTo(startX, startY)
      .lineTo(endX, endY)
      .stroke();
    resolve();
  });
}

function printText(doc, font, text, startY, fontSize = 10.3, ) {
  const textX = 50;
  const textY = startY + 50;
  if(startY == 438)
  text = "(" + text + ")"; 

  doc
    .font(font)
    .fontSize(fontSize)
    .text(text, textX, textY, { width: 595 - 100, align: 'left', lineGap: 0 });
}

  
  function createInvoice(path) {
      let doc = new PDFDocument({ size: 'A4' });
      const watermarkImagePath = './files/watermark.png';
      addWatermarkToPDF(doc, watermarkImagePath, doc.page.width, doc.page.height);
      doc.page.width = 595;
      doc.page.height = 842;
      
      generateHeader(doc); // Invoke `generateHeader` function.
      generateTable(doc);
      generateTablemid(doc);
      generateTableLast(doc);

      drawLine(doc, 50, 487, 545, 487); 

      printText(doc, './files/cambria/cambria.ttf', convertRupeesIntoWords(58439), 438);
      var lowerText = "This is a computer generated salary slip and does not require any signature, in case of any discrepancy please contact Admin department.";

      printText(doc, './files/cambria/cambriab.ttf', lowerText, 449);

      

    // // Call the function to add the watermark

    doc.end();
    doc.pipe(fs.createWriteStream(path));
}

module.exports = {
    createInvoice,
};