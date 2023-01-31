import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SG_KEY!);

type SendGridtype = {
    to: string;
    subject: string;
    html: string;
};

export default async function sendSGMail({ to, subject, html }: SendGridtype) {
    try {
        const msg = {
            to: to, // Change to your recipient
            from: 'sanyamshruti@gmail.com', // Change to your verified sender
            subject: subject,
            html: html,
        };

        console.log(msg);

        return sgMail.send(msg);
    } catch (error) {
        console.log(error);
    }
}
