



// Define custom font and color settings for each row
const cellConfig = [
    { font: './files/cambria/cambriab.ttf' , color: 'black' }, // Row 1 font: Helvetica-Bold, color: red
  { font: './files/cambria/cambria.ttf' , color: 'black' },   // Row 2 font: Times-Roman, color: blue
];

// Set A4 page size (595 points x 842 points)
const pageWidth = 595;
const pageHeight = 842;

// Define the Y pixel value to move the table down from the top of the page
const startY = 438;


function generateTableLast(doc, pData) {
    const cellWidth = (pageWidth - 100) / 7 - 20; // Calculate cell width to fit 7 cells with 50-pixel margin
    const cellHeight = 18;
    const tableX = 50;
    const tableY = startY;
    const data = [
      ['Present', 'Absent', 'Week Of', 'HL', 'Paid Leave', 'Unpaid Leave', 'Working Days'],
      [pData['Present'], pData['Absent'], pData['Week Of'], pData['HL'], pData['Paid Leave'], pData['Unpaid Leave'], pData['Working Days']],
    ];
  
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        const value = data[row][col];
  
        const cellX = tableX + col * cellWidth;
        const cellY = tableY + row * cellHeight;
  
        const { font, color } = cellConfig[row];
  
        // Add content to each cell
        if(col == 4 ){
            
            doc
              .font(font)
              .fontSize(10.3)
              .fillColor(color)
              .text(value, cellX - 20, cellY + 18, { width: cellWidth + 100 , align: 'left', lineGap: 1 });
      
        } else if(col == 5) {
            doc
             .font(font)
             .fontSize(10.3)
             .fillColor(color)
             .text(value, cellX - 5, cellY + 18, { width: cellWidth + 100, align: 'left', lineGap: 1 });
        } else if(col == 6){
            doc
            .font(font)
            .fontSize(10.3)
            .fillColor(color)
            .text(value, cellX + 15, cellY + 18, { width: cellWidth + 100, align: 'left', lineGap: 1 });
        }
        else {
            doc
              .font(font)
              .fontSize(10.3)
              .fillColor(color)
              .text(value, cellX + 5, cellY + 18, { width: cellWidth + 100, align: 'left', lineGap: 1 });
      

        }
        // Set border color to grey
        doc.strokeColor('grey');
  
        // Draw dotted border at the bottom of each cell
        doc
          .moveTo(cellX, cellY + cellHeight)
          .lineTo(cellX + cellWidth + 80, cellY + cellHeight )
          .dash(1, { space: 3 }) // Adjust the dash pattern as needed
          .stroke();
      }
    }
  }



  module.exports = generateTableLast