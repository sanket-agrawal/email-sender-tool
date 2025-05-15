import express from "express";
import emailController from "./email.controller.js";

const router = express.Router();

router.route('/send').post(emailController.send);

export default router;