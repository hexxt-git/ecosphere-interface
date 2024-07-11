import nodemailer from "nodemailer";
import * as e from "$env/static/private";
import { HbsCompiler } from "$lib/handlebars";

export function sendMail(receiver, subject, context, template, callback) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: e.EMAIL_ADDRESS,    // 'randomdeaddrop@gmail.com',
        pass: e.EMAIL_PASSWORD // 'klaa vsmy ikhe ggtz'
      }
    });

    let mailOptions = {
      from: `${e.EMAIL_HANDLE} <${e.EMAIL_ADDRESS}>`,
      to: receiver,
      subject: subject,
      html: HbsCompiler(template, context),
    };

    transporter.sendMail(mailOptions, callback);
  } catch (error) {
    console.log(error)
    // Err
  }
}

