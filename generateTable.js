const fs = require('fs');
const PDFDocument = require('pdfkit');



function generateTable(doc, pData, pageWidth = 595, startY = 200) {
    const cellWidth = (pageWidth - 100) / 3; // Calculate cell width to fit 3 cells with 50-pixel margin
    const cellHeight = 15;
    const tableX = 50;
    const tableY = startY;
    const data = [
      [
        { key: 'Emp Code :', value: pData['Emp Code'] },
        { key: 'Department :', value: pData['Department'] },
        { key: 'PAN :', value: pData['PAN'] },
      ],
      [
        { key: 'Emp Name :', value: pData['Name'] },
        { key: 'Designation: ', value: pData['Design.'] },
        { key: 'ESI :', value: pData['ESI'] },
      ],
      [
        { key: 'Joining On  :', value: pData['Joining On'] },
        { key: 'Emp Status:', value: pData['Emp Status'] },
        { key: 'EPF:', value: pData['EPF'] }
      ],
      [
        { key: '', value: '' },
        { key: '', value: '' },
        { key: 'UAN No :', value: pData['UAN No'] }
      ]
    ];
  
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        
        const key = data[row][col].key;
        const value = data[row][col].value;


  
        var cellX = tableX + col * cellWidth;
        var cellY = tableY + row * cellHeight;

        if(row == 3){
          cellX -= 20;
          
        }

        
            cellY -= 20;

        if(col == 2)
            cellX += 50;
  
        doc
          .font(keysFont)
          .fontSize(10.3)
          .text(`${key}`, cellX, cellY, { width: cellWidth - 10, align: 'left', lineGap: 0 });
  
        doc
          .font(valuesFont)
          .fontSize(10.3)
          .text(value, cellX + (col == 2 ? row == 3 ? 40 : 25 : 60), cellY, { width: cellWidth - 10, align: 'left', lineGap: 0 });
      }
    }
  }

  const keysFont = './fonts/cambria/cambriab.ttf';
  const valuesFont = './fonts/cambria/cambria.ttf';
  

  module.exports = generateTable