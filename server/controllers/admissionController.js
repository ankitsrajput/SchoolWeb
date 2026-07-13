import transporter from "../config/mailer.js";
import admissionTemplate from "../template/admissionTemplate.js";
import autoReplyTemplate from "../template/autoReplyTemplate.js";

export const sendAdmissionMail = async (req, res) => {
    try {

        const {
            studentName,
            dob,
            gender,
            className,
            fatherName,
            motherName,
            phone,
            email,
            address,
            message,
        } = req.body;

        if (
            !studentName ||
            !dob ||
            !gender ||
            !className ||
            !fatherName ||
            !phone ||
            !email ||
            !address
        ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Admission Enquiry - ${studentName}`,
            html: admissionTemplate({
                studentName,
                dob,
                gender,
                className,
                fatherName,
                motherName,
                phone,
                email,
                address,
                message,
            }),
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Admission Enquiry Received",
            html: autoReplyTemplate(studentName, "admission enquiry"),
        });

        res.status(200).json({
            success: true,
            message: "Admission enquiry submitted successfully.",
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
};