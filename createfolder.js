const fs = require('fs').promises;
const path = require('path');

async function createFolderIfNotExists(directoryPath, folderName) {
    try {
        const folderPath = path.join(directoryPath, folderName);

        // Check if the folder already exists
        const folderExists = await fs.stat(folderPath).catch(() => false);

        if (!folderExists) {
            // Create the folder
            await fs.mkdir(folderPath);
            console.log(`Folder '${folderName}' created in '${directoryPath}'.`);
        } else {
            console.log(`Folder '${folderName}' already exists in '${directoryPath}'.`);
        }
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

// Usage
// const directoryPath = './output/2023';
// const folderName = 'Jan';

// createFolderIfNotExists(directoryPath, folderName);

module.exports = createFolderIfNotExists