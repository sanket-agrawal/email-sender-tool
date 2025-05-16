import express from "express";
import emailRoutes from './emailer/email.routes.js';
import fileRoutes from './files/file.routes.js'

const router = express.Router();

router.use('/email',emailRoutes);
router.use('/file',fileRoutes);

export default router;