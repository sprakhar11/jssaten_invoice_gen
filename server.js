const express = require('express');
const multer = require('multer');
var createfolder = require('./createfolder.js');
const { setfilename, getfilename } = require('./sharedVariables.js');
const fs = require('fs').promises;

let contentToWrite = "This is the content to be written to the file.";


const filePath = 'output.txt';

async function writeContentToFile(content) {
    try {
        // Check if the file exists
        const fileExists = await fs.access(filePath).then(() => true).catch(() => false);

        // Write content to the file
        await fs.writeFile(filePath, content, { flag: fileExists ? 'w' : 'wx' });

        console.log('Content written to file successfully.');
    } catch (err) {
        console.error('Error:', err);
    }
}

const path = require('path');
const app = express();
const port = 3000;


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
    var dirPath = './';
    createfolder(dirPath, 'output')
    .then( () => {
        dirPath = './output';
    
        const folderName = year + '';
    
        createfolder(dirPath, folderName);
    }).then( () => {
        dirPath = dirPath + '/' + year;
        createfolder(dirPath, months[month]);

    }).then( () => {
        dirPath = dirPath + '/' + months[month];
        createfolder(dirPath, "Sheet");
    }).then( ()=> {
        createfolder(dirPath, "Generated Invoice");
    })


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './output/' + year + '/' + months[month] + '/Sheet/');
    },

    filename: (req, file, cb) => {
        const timestamp = new Date().toISOString().replace(/:/g, '-');
        cb(null, `${timestamp}_${file.originalname}`);
    }

});

const upload = multer({ storage });

app.use(express.static('./'));

app.post('/upload', upload.single('file'), (req, res) => {
    console.log("heyy")
    console.log(__dirname);
    

    const filePath = path.join(__dirname, 'output', `${year}`, `${months[month]}`,"Sheet",  req.file.filename);


    setfilename(filePath);
    console.log(getfilename());
    contentToWrite = filePath;
    writeContentToFile(contentToWrite);
    const dateTime = new Date().toLocaleString();
    res.json({
        fileName: req.file.filename,
        filePath: filePath,
        dateTime: dateTime
    });
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}  http://localhost:3000`);
    console.log(__dirname)
});
