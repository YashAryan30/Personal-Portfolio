// server.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // load .env variables

// server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT || 5000, () => console.log("Server Running"));

// check if .env variables are loaded
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

// setup nodemailer transporter
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // your Gmail from .env
    pass: process.env.EMAIL_PASS   // your App Password from .env
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error verifying transporter:", error);
  } else {
    console.log("Ready to Send");
  }
});

// POST route for contact form
router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`; // add space
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: email, // sender email
    to: process.env.EMAIL_USER, // receiver email from .env
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Failed to send message", error });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
