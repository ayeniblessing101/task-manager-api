const nodemailer = require("nodemailer");

const sendWelcomeEmail = (email, name) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  transporter.sendMail({
    from: "ayeniblessing32@gmail.com",
    to: email,
    subject: "Thanks for joining in",
    text: `Welcome to the app. ${name}. Let us know how you get along with the app`,
  });
};

module.exports = { sendWelcomeEmail };
