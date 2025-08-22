import express from 'express';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const PORT = 3000;
const SECRET_KEY= "secretkey123";
app.use(express.json());
app.use(cors);

const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again after 5 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 password reset requests per windowMs
    message: 'Too many password reset attempts, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});

//in-memory object to store otps 
const otpStore: Record<string, string> = {};

app.post('/otp-generate', (req, res) => {
    const email = req.body.email;
    if(!email) {
        return res.status(400).json({
            message: "Email is requried"
        })
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp; //stores in-memory

    //use otp email ServerStackItem
    console.log(`OTP for ${email} is ${otp}`);
    res.status(200).json({message: "Otp generated and logged successfully"})
})


app.post('/reset-password', async (req, res) => {
    
    const {otp, email, newPassword, token }  = req.body;

    let formData = new FormData();
    formData.append('secret', SECRET_KEY);
    formData.append('response', token);

    const url = '<https://challenges.cloudflare.com/turnstile/v0/siteverify>';
    const result = await fetch(url, {
        body: formData,
        method: 'POST',
    });
    console.log(result);

    if(!email || !newPassword || !otp) {
        return res.status(400).json({message: "Email, OTP and new Password is required"});
    } 
    
    if (otpStore[email]=== otp) {
        console.log(`Password for ${email} has been reset to ${newPassword}`); //update password in db
        delete otpStore[email]; //clear from in-memory
        res.status(200).json({message: "Password has been reset successfuly"})
    } else {
        return res.status(401).json({message: "Invalid OTP"});
    }  
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})

