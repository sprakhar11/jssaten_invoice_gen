const fs = require('fs');
const PDFDocument = require('pdfkit');


const data = [
    ['Particulars', 'Actual Amount', 'Ideal Amount'],
    ['      Earnings', '', ''],
    ['                Basic Salary', 'Cell 8', 'Cell 9'],
    ['                DA',           'Cell 11', 'Cell 12'],
    ['                HRA',          'Cell 14', 'Cell 15'],
    ['                Grade Pay',    'Cell 14', 'Cell 15'],
    ['                Gross Earning', 'Cell 14', 'Cell 15'],
    ['     Deduction', '', ''],
    ['                Provident Fund', 'Cell 14', 'Cell 15'],
    ['                Donation', 'Cell 14', 'Cell 15'],
    ['                Gross Deduction', 'Cell 14', 'Cell 15'],
    ['                              Net Salary', 'Cell 14', 'Cell 15'],

  ];
  

function generateTablemid(doc, pageWidth = 595, startY = 240) {
    const cellWidth = (pageWidth - 100) / 3; // Calculate cell width to fit 3 cells with 50-pixel margin
    const cellHeight = 15;
    const tableX = 50;
    const tableY = startY;
  
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        const value = data[row][col];
  
        const cellX = tableX + col * cellWidth ;
        const cellY = tableY + row * cellHeight;
  
        const { font, color } = cellConfig[row][col];
  
        // Add content to each cell
        doc
          .font(font)
          .fontSize(10.3)
          .fillColor(color)
          .text(value, cellX + 5, cellY - 1, { width: cellWidth - 10, align: 'left', lineGap: 5 });
  
          if(row == 6 || row == 10 || row == 11){
           
              doc
              .moveTo(cellX, cellY)
              .lineTo(cellX + cellWidth, cellY)
              .stroke();

            // Draw full border at the bottom of the cell
            doc
              .moveTo(cellX, cellY + cellHeight)
              .lineTo(cellX + cellWidth, cellY + cellHeight)
              .stroke();
            
          }
        else{  
          doc.strokeColor('grey');
          // Draw dotted line at the bottom of each cell
          if(row != 6 && row != 7 && row != 10 && row != 11)
          doc
          .moveTo(cellX, cellY)
          .lineTo(cellX + cellWidth, cellY)
          .dash(1, { space: 3 }) // Adjust the dash pattern as needed
          .stroke();

        // Draw dotted border at the bottom of each cell
        if(row != 5 && row != 6 && row != 10 && row != 11)
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
      { font: './files/cambria/cambriab.ttf' , color: 'black' },
      { font: './files/cambria/cambriab.ttf' , color: 'black' },
      { font: './files/cambria/cambriab.ttf' , color: 'black' },

    ],
      [
        { font: './files/cambria/cambriab.ttf' , color: 'blue' },
        { font: 'Times-Roman', color: 'green' },
        { font: 'Courier', color: 'blue' },
      ],
      [
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
      [
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
      [
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
      [
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
      [
        { font: './files/cambria/cambriab.ttf' , color: 'blue' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],[
        { font: './files/cambria/cambriab.ttf' , color: 'blue' },
        { font: 'Times-Roman', color: 'green' },
        { font: 'Courier', color: 'blue' },
      ],
      [
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
      [
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
      [
        { font: './files/cambria/cambriab.ttf' , color: 'blue' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
      [
        { font: './files/cambria/cambriab.ttf' , color: 'red' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },
        { font: './files/cambria/cambria.ttf' , color: 'black' },

      ],
  ];


  module.exports = generateTablemid;