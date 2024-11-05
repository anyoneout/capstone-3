import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
console.log(RESEND_API_KEY);
const resend = new Resend(RESEND_API_KEY);

console.log("API_KEY:", resend);

export default function handler(req, res) {
  const query = req.query;
  const name = query.name;
  const message = query.message;
  const subject = query.subject;
  console.log(name);
  console.log(message);

  const email = {
    from: 'Acme <onboarding@resend.dev>',
    to: ['chrisdafur@gmail.com'],
    subject: subject,
    html: `<strong>${message}</strong>`,

  }
resend.emails.send(email);

  res.status(200).json({ name: name, subject: subject, message: message });
}
