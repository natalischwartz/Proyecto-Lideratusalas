import { Resend } from "resend";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parsear el body manualmente si Vercel no lo hace
    const body = request.body || JSON.parse(await getRawBody(request));
    const { name, email, message } = body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: "no-reply@lideratusalas.com.ar",
      to: "schwartznatali@gmail.com",
      subject: "Nuevo mensaje desde el formulario",
      html: `
        <h2>Nuevo Mensaje</h2>
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${message}</p>
      `,
    });

    return response.status(200).json({ status: "Email enviado", data });
  } catch (error) {
    console.error("ERROR ENVIANDO EMAIL:", error);
    return response.status(500).json({ error: "Error enviando email" });
  }
}

// Necesario en Vercel + Vite para leer el body
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", err => reject(err));
  });
}
