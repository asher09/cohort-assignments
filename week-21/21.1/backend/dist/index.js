"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
//in-memory object to store otps 
const otpStore = {};
app.post('/otp-generate', (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({
            message: "Email is requried"
        });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp; //stores in-memory
    //use otp email ServerStackItem
    console.log(`OTP for ${email} is ${otp}`);
    res.status(200).json({ message: "Otp generated and logged successfully" });
});
app.post('/reset-password', (req, res) => {
    const { otp, email, newPassword } = req.body;
    if (!email || !newPassword || !otp) {
        return res.status(400).json({ message: "Email, OTP and new Password is required" });
    }
    if (otpStore[email] === otp) {
        console.log(`Password for ${email} has been reset to ${newPassword}`); //update password in db
        delete otpStore[email]; //clear from in-memory
        res.status(200).json({ message: "Password has been reset successfuly" });
    }
    else {
        return res.status(401).json({ message: "Invalid OTP" });
    }
});
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
