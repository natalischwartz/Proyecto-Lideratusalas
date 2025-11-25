// api/send-email.js
import { Resend } from "resend";
import ContactEmail from "../src/emails/ContactEmail.jsx";

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "no-reply@tu-dominio.com",
      to: "schwartznatali@gmail.com",
      subject: "Nuevo mensaje desde el formulario",
      react: (
        <ContactEmail
          name={name}
          email={email}
          phone={phone}
          message={message}
        />
      ),
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
