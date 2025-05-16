import express from "express";
import fileController from "./file.controller.js";
import multer from "multer";
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..','..','..','..','assets');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const router = express.Router();

const upload = multer({storage : storage});

router.route('/single').post(upload.single('file'), fileController.uploadFile);
router.route('/list').get(fileController.fetchUploadedFileList)

export default router;