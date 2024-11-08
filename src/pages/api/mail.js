import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
console.log(RESEND_API_KEY);
const resend = new Resend(RESEND_API_KEY);

console.log("API_KEY:", resend);

export default async function handler(req, res) {
  const query = req.query;
  const user = query.name || "add new name to url";
  const message = query.message || "add new message to url";
  const subject = query.subject || "whatever";
console.log(user);
 console.log(message);

  const email = {

    from: 'Acme <onboarding@resend.dev>',
    to: ['chrisdafur@gmail.com'],
    subject: subject,
    html: `<strong>${message}</strong>`,
  }
  const { data, error } = await resend.emails.send(email);
  console.log(data, error);

  res.status(200).json({ name: user, subject: subject, message: message });
}
