import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
type SendGridtype = {
    to: string;
    subject: string;
    html: string;
};

async function sendSGMail({ to, subject, html }: SendGridtype) {
    try {
        const msg = {
            to: to, // Change to your recipient
            from: 'testingbrother0@gmail.com', // Change to your verified sender
            subject: subject,
            html: html,
        };

        return await sgMail.send(msg);
    } catch (error) {
        console.log(error);
    }
}

export default async (args: SendGridtype) => {
    if (process.env.NODE_ENV === "developement") {
        return Promise.resolve();
    } else {
        // return sendSGMail(args);
        console.log("sendSGMail function invoked!")
    }
}