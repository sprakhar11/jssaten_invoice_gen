const { createInvoice } = require('./createInvoice.js');
const reader = require('xlsx')
const file = reader.readFile('./files/filter2.xlsx')



let data = [];

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
    const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
    temp.forEach((res) => {
        data.push(res)
    })
    
}

// Printing data
console.log(data[0]['Sl NO']);

myObject = data[0];
var data_arr = [];
for (let key in myObject) {
    // Check if the property is not inherited from the prototype chain
    if (myObject.hasOwnProperty(key)) {
      // Access the value using bracket notation
      const value = myObject[key];

      data_arr.push(value);
      console.log(`${key}: ${value}`);
    }
}

console.log(data_arr.length);

var name = data_arr[1];
var design = data_arr[2];
var basic = data_arr[3];
var grade_pay = data_arr[4];
var da = data_arr[5];
var hra = data_arr[6];
var spl_pay = data_arr[7];
var gross = data_arr[8];
var pf = data_arr[9];
var other_deduct = data_arr[10];
var total_deduct = data_arr[11];
var net_payable = data_arr[12];

console.log(name, design, basic, grade_pay, da, hra, spl_pay, gross,
    pf, other_deduct, total_deduct, net_payable)


    const invoice = {
        shipping: {
            name: 'John Doe',
            address: '1234 Main Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
            postal_code: 94111,
        },
        items: [
            {
                item: 'TC 100',
                description: 'Toner Cartridge',
                quantity: 2,
                amount: 6000,
            },
            {
                item: 'USB_EXT',
                description: 'USB Cable Extender',
                quantity: 1,
                amount: 2000,
            },
        ],
        subtotal: 8000,
        paid: 0,
        invoice_nr: 1234,
    };

createInvoice(invoice, 'invoice.pdf');




