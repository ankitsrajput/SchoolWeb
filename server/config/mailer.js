import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL.trim(),
        pass: process.env.EMAIL_PASS.trim(),
    },
});

transporter.verify((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("✅ SMTP Connected");
    }
});

export default transporter;