import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import routes from './api/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/api',routes);

export default app;