import express from "express";
import emailRoutes from './emailer/email.routes.js';

const router = express.Router();

router.use('/email',emailRoutes);

export default router;