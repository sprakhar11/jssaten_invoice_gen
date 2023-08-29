const fs = require('fs');
const PDFDocument = require('pdfkit');



  

function generateTablemid(doc, pData, pageWidth = 595, startY = 240) {
    let cellWidth = (pageWidth - 100) / 4; // Calculate cell width to fit 3 cells with 50-pixel margin
    const cellHeight = 15;
    const tableX = 50;
    const tableY = startY;
    
    const data = [
      ['Earnings',     '   Amount', 'Deduction', 'Amount'],
      ['   Basic',       '   ' +  pData['Basic'], '   Provident Fund', pData['Provident Fund']],
      ['   DA',           '   ' +  pData['DA'], '   TDS', pData['TDS']],
      ['   HRA',          '   ' +  pData['HRA'], '   Rent', pData['Rent']],
      ['   Grade Pay',    '   ' +  pData['Grade Pay'], '   LIC', pData['LIC']],
      ['','', '   Electricity', pData['Electricity']],
      ['     ', '', '   Donation', pData['Donation']],
      ['   Total', '   ' + pData['Gross'],'   Total',  pData['Total decuction']],
      [],
      ['', '', '   Net Salary', pData['Net payable'].substring(1), ],

    ];

  
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        const value = data[row][col];
  
        let cellX = tableX + col * cellWidth ;
        let cellY = tableY + row * cellHeight;
        
        const { font, color } = cellConfig[row][col];
  
        // Add content to each cell
        doc
          .font(font)
          .fontSize(10.3)
          .fillColor(color)
          .text(value, cellX + 2, cellY - 1, { width: cellWidth - 5, align: 'left', lineGap: 5 });
  
          if(row == 7 || row == 9  ){

              

           
              doc
              .moveTo(cellX, cellY)
              .lineTo(cellX + cellWidth, cellY)
              .stroke();

            // Draw full border at the bottom of the cell
            if(row == 7 )
            doc
              .moveTo(cellX, cellY + cellHeight)
              .lineTo(cellX + cellWidth, cellY + cellHeight)
              .stroke();
            
          }
        else{  
          doc.strokeColor('grey');
          // Draw dotted line at the bottom of each cell
          if(row == 8)
          doc
          .moveTo(cellX, cellY)
          .lineTo(cellX + cellWidth, cellY)
          .dash(1, { space: 3 }) // Adjust the dash pattern as needed
          .stroke();

          // Draw dotted border at the bottom of each cell
          if(true)
          doc
            .moveTo(cellX, cellY + cellHeight)
            .lineTo(cellX + cellWidth, cellY + cellHeight)
            .dash(1, { space: 3 }) // Adjust the dash pattern as needed
            .stroke();

          doc.undash();
      }
        
        
      }
    }
  }

  // Define custom font and color settings for each cell
  const cellConfig = [
    [
      { font: './files/cambria/cambriab.ttf' , color: 'blue' },
      { font: './files/cambria/cambriab.ttf' , color: 'blue' },
      { font: './files/cambria/cambriab.ttf' , color: 'blue' },
      { font: './files/cambria/cambriab.ttf' , color: 'blue' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
    [
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },
      { font: './files/cambria/cambria.ttf' , color: 'black' },


    ],
  ];


  module.exports = generateTablemid;