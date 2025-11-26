
import nodemailer from "nodemailer";

export default async function sendMail(req, res) {
  const { nombre, email, mensaje, telefono } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
    rejectUnauthorized: false, // ← evita error de certificado
  },
    });

    const mailOptions = {
      from: `Formulario Web <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Nuevo mensaje desde la web",
      text: `
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Mensaje: ${mensaje}
`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.log("Error enviando:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
