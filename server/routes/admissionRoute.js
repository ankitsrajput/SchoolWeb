import express from "express";
import { sendTestMail } from "../controllers/admissionController.js";

const router = express.Router();

router.get("/test-email", sendTestMail);

export default router;