import fs from 'fs/promises';
import { format } from 'date-fns'



async function writeFileToDisk(destinationFile, result) {
    await fs.writeFile(destinationFile, result);
}

async function generateFile() {
    try {
        const currentDateTime = format(new Date(), 'dd-MM-yyyy--hh-mm-ss');
        const destinationFile = new URL(`./generated/${currentDateTime}.txt`, import.meta.url);
        const fileContent = 'Hello World';
    
        await writeFileToDisk(destinationFile, fileContent);

    } catch (error) {
        console.log(error);
    }
}

generateFile();

