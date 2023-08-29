const nodemailer = require("nodemailer");



require('dotenv').config()
const transporter = nodemailer.createTransport({
    service : "gmail",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.SEND_BY,
      pass: process.env.PASSWORD
    }
  });


async function sendmail(senderEmail, filepath, name){
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
    

    const info = await transporter.sendMail({
        from: process.env.SEND_BY, // sender address
        to: senderEmail, // list of receivers
        subject: "Salary Slip", // Subject line
        text: "Salary Invoice " + months[month] + " " + year, // plain text body
        html: "", // html body
        attachments : [
            {   // file on disk as an attachment
                filename: name + '_Invoice.pdf',
                path: filepath // stream this file
            },
        ]
      });
    
      // console.log("Message sent: %s", info.messageId);
      console.log("Sent Successfully");

}
  // doStuff is defined inside the module so we can call it wherever we want
  
  // Export it to make it available outside
  module.exports.sendmail = sendmail;