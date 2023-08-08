import nodemailer from "nodemailer";
import "dotenv/config";
import { SendEmailFuncProps } from "@/types/emailService";

const { SMTP_HOST, SMTP_PORT, SMTP_PASSWORD, SMTP_USER, CLIENT_APP_URL } =
    process.env;

const transporter = nodemailer.createTransport({
    host: `${SMTP_HOST}`,
    port: +SMTP_PORT!,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
});

export const sendEmail = ({ email, subject, html }: SendEmailFuncProps) => {
    transporter.sendMail({
        from: SMTP_USER,
        to: email,
        subject,
        html,
    });
};

export const sendActivationLink = (email: string, token: string) => {
    const link = `${CLIENT_APP_URL}/activate/${token}`;
    return sendEmail({
        email,
        subject: "Account activation",
        html: `
        <h1>Account activation</h1>
        <a href="${link}">${link}</a>`,
    });
};

export const emailService = { sendEmail, sendActivationLink };

// sendEmail({
//     email: "bagisa4628@weishu8.com",
//     subject: "hi",
//     text: "hello world",
// });
