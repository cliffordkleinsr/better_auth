import { MAILJET_API_KEY, MAILJET_SECRET_KEY, MAILJET_SENDER } from '$env/static/private';
import nodemailer, { type Transporter } from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'in-v3.mailjet.com',
	port: 587,
	secure: false, // true for port 465, false for other ports
	auth: {
		user: MAILJET_API_KEY,
		pass: MAILJET_SECRET_KEY
	}
}) satisfies Transporter;

export default async function sendEmail(to: string, subject: string, text: string) {
	try {
		transporter.sendMail(
			{
				from: MAILJET_SENDER,
				to,
				subject,
				text
			},
			(err) => {
				if (err) {
					console.error(err);
				}
			}
		);
	} catch (error) {
		console.error(error);
	}
}
