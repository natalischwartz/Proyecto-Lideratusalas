import { Resend } from "resend";

export default async function handler(req, res) {
  const resend = new Resend(process.env.VITE_RESEND_API_KEY);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, message, countryCode } = req.body;

  try {
    await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      to: "schwartznatali@gmail.com",
      subject: "Nuevo mensaje desde tu formulario",
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${countryCode} ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
