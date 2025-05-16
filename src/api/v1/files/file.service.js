import fs from "fs/promises";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..','..','..','..','assets');

const fileService  = {

     fetchUploadedFiles : async ({type = 'pdf'}) => {
        try {
                const uploadedFiles = await fs.readdir(filePath);
                const typeSpecificFiles = uploadedFiles.filter(file => file.toLocaleLowerCase().endsWith(`${type}`));
                return typeSpecificFiles;
        } catch (error) {
            throw error;
        }
    }
};

export default fileService;