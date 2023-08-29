const reader = require('xlsx')
const fs = require('fs').promises;
require('dotenv').config()
const { createInvoice } = require('./createInvoice.js');
var createfolder = require('./createfolder.js');
const { setfilename, getfilename } = require('./sharedVariables.js');



let globalContent = ''; // Global variable to store the content


async function readContentFromFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        return content;
    } catch (err) {
        console.error('Error:', err);
        return null;
    }
}

(async () => {
    const filePath = 'output.txt'; // Replace with the actual file path
    const content = await readContentFromFile(filePath);

    if (content !== null) {
        globalContent = content; // Store the content in the global variable
        console.log('Content read from file:', globalContent);
        
        const sheetpath = globalContent;
        console.log(sheetpath);

        const file = reader.readFile(sheetpath)
        const { sendmail } = require('./sendmail.js') 

        let sheetData = [];

        const sheets = file.SheetNames;

        console.log(sheets);

            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            var date = new Date();
            var month = date.getMonth(); // returns 0 - 11

            var year = date.getFullYear();

            // console.log(months[month]);

            // console.log(year);

            month -= 1;
            if(month == - 1){
            month = 11;
            year -= 1;
            }

            var dirPath = './output';
            const folderName = year + '';

            createfolder(dirPath, folderName);

            dirPath = dirPath + '/' + year;

            createfolder(dirPath, months[month]);
            dirPath = dirPath + '/' + months[month];
            createfolder(dirPath, "Sheet");
            createfolder(dirPath, "Generated Invoice");






        for(let i = 0; i < sheets.length; i++)
        {
            const temp = reader.utils.sheet_to_json(
                    file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                sheetData.push(res)
            })

        }


        async function generateAllPDFs() {

            var cnt = 1;

        for (const person of sheetData) {

            // const personObj = { ...person};
            // console.log(personObj);    
            // var docName = './output/' + year + '/'+ months[month] + '/' + personObj['Name'] + '.pdf';
            // console.log(docName);
            // await createInvoice(docName, personObj);

            // if(personObj['Email'] != undefined)
            //     sendmail(personObj['Email'], docName, cnt++);
            // console.log(personObj['Email'] + '      Email');
            await new Promise(resolve => setTimeout(resolve, 5000));
            
            console.log('Start');
            setTimeout(async () => {

                const personObj = { ...person};
                // console.log(personObj);    
                var docName = './output/' + year + '/'+ months[month] + '/Generated Invoice/' + personObj['Name'] + '_Invoice.pdf';
                // console.log(docName);

                await createInvoice(docName, personObj);

                if(personObj['Email'] != undefined)
                    await sendmail(personObj['Email'], docName, personObj['Name']);


                console.log(personObj['Email'] + '      Email');
                console.log('Delayed code executed after 5000ms');


            }, 5000); // 2000ms = 2 seconds
            console.log('End');

        }

        console.log('All PDFs generated.');
        }
        generateAllPDFs();
    } else {
        console.log('Content not successfully copied.');
    }
})();





// old code 
// Printing data
// console.log(data);


// var data_arr = [];
// for (let key in myObject) {
//     // Check if the property is not inherited from the prototype chain
//     if (myObject.hasOwnProperty(key)) {
//       // Access the value using bracket notation
//       const value = myObject[key];

//       data_arr.push(value);
//       console.log(`${key}: ${value}`);
      
//     }
// }

// var name = data_arr[1];
// var design = data_arr[2];
// var basic = data_arr[3];
// var grade_pay = data_arr[4];
// var da = data_arr[5];
// var hra = data_arr[6];
// var spl_pay = data_arr[7];
// var gross = data_arr[8];
// var pf = data_arr[9];
// var other_deduct = data_arr[10];
// var total_deduct = data_arr[11];
// var net_payable = data_arr[12];



// console.log(name, design, basic, grade_pay, da, hra, spl_pay, gross,
//     pf, other_deduct, total_deduct, net_payable);


// createInvoice('invoice.pdf');




