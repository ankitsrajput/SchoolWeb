import transporter from "../config/mailer.js";
import contactTemplate from "../templates/contactTemplate.js";
import autoReplyTemplate from "../templates/autoReplyTemplate.js";

export const sendContactMail = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });
        }

        // Email to School
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Contact Enquiry - ${subject}`,
            html: contactTemplate({
                name,
                email,
                phone,
                subject,
                message,
            }),
        });

        // Auto Reply to User
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Thank you for contacting SR. L.S. International Public School",
            html: autoReplyTemplate(name),
        });

        return res.status(200).json({
            success: true,
            message: "Enquiry submitted successfully.",
        });

    } catch (error) {
        console.error("Contact Error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong.",
        });
    }
};