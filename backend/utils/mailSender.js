const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.MAIL_HOST,
            auth: {
               
            },
        });

        let info = await transporter.sendMail({
            from: "PrintX",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`,
        });

        console.log("Email sent:", info);

        return info;
    } catch (error) {
        console.error("Error sending email:", error.message);
        throw error; 
};

module.exports = mailSender;
