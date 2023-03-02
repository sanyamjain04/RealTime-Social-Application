import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
console.log("sg spi set");

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
            text: "hello ia ma your buddy"
        };
        console.log(msg);

        return await sgMail.send(msg).then(res => console.log(res)
        ).catch(err => console.log(err));
    } catch (error) {
        console.log(error);
    }
}

export default async (args: SendGridtype) => {
    if (process.env.NODE_ENV === "developement") {
        return Promise.resolve();
    } else {
        return console.log("sendSGMail function invoked!")
        // return await sendSGMail(args);
    }
}