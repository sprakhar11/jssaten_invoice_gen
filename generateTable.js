const fs = require('fs');
const PDFDocument = require('pdfkit');

const data = [
    [
      { key: 'Emp Code :', value: 'CSENT0114' },
      { key: 'Department :', value: 'Computer Center' },
      { key: 'PAN:', value: 'BEPPP8648D' },
    ],
    [
      { key: 'Emp Name :', value: 'Vikas Panchal' },
      { key: 'Designation:', value: 'System Administrator ' },
      { key: 'ESI:', value: '' },
    ],
    [
      { key: 'Joining On  :', value: '01/07/2009' },
      { key: 'Emp Status:', value: 'Working' },
      { key: 'EPF:', value: 'UP/24528/676' }
    ],
    [
      { key: '', value: '' },
      { key: '', value: '' },
      { key: 'UAN No:', value: '100405809061' }
    ]
  ];

function generateTable(doc, pageWidth = 595, startY = 200) {
    const cellWidth = (pageWidth - 100) / 3; // Calculate cell width to fit 3 cells with 50-pixel margin
    const cellHeight = 15;
    const tableX = 50;
    const tableY = startY;
  
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

  const keysFont = './files/cambria/cambriab.ttf';
  const valuesFont = './files/cambria/cambria.ttf';
  

  module.exports = generateTable