import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';
import { env } from "process";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILER_ADAPTER_USERNAME,
    pass: process.env.MAILER_ADAPTER_PASSWORD
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Gabriel <gabrielpresb@gmail.com>',
      subject,
      html: body
    })
  };
}