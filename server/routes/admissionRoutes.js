import express from "express";
import { sendAdmissionMail } from "../controllers/admissionController.js";

const router = express.Router();

router.post("/", sendAdmissionMail);

export default router;