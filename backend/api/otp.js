export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method Not Allowed" });
    }

    const { otp } = req.body;
    
    if (otp === "123456") { 
        res.status(200).json({ success: true, message: "OTP Verified!" });
    } else {
        res.status(400).json({ success: false, message: "Invalid OTP" });
    }
}