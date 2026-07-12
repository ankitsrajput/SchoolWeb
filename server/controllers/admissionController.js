import transporter from "../config/mailer.js";

export const sendTestMail = async (req, res) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.RECEIVER_EMAIL,
            subject: "Test Email from School Website",
            html: `
                <h2>🎉 Congratulations!</h2>
                <p>Your Node.js + Nodemailer setup is working successfully.</p>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Test email sent successfully!",
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};