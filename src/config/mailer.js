import nodemailer from "nodemailer";
import dotenv from "dotenv";
import handlebars from 'handlebars';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()

const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure : false,
    auth: {
      user: "noreply@laurengroup.ai",
      pass: "LITL5775",
    }
})

const sendEmail = async (to,data) => {
    try {
        const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'templates', 'welcome-email.hbs');
  const source = await fs.readFile(filePath, 'utf8');
  const template = handlebars.compile(source);
  const html = template(data);
        const mailOptions = {
            from: `Sanket Agrawal <noreply@laurengroup.ai>`,
      to,
      subject : "test",
      html
        }
        const response = transport.sendMail(mailOptions);
        return true;    
    } catch (error) {
        throw error;
    }
}

export default sendEmail;