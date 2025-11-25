// src/emails/ContactEmail.jsx
import { Html } from '@react-email/html';

export function ContactEmail({ name, email, phone, message }) {
  return (
    <Html lang="es">
      <h2>Nuevo mensaje desde el formulario</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Teléfono:</strong> {phone}</p>
      <p><strong>Mensaje:</strong></p>
      <p>{message}</p>
    </Html>
  );
}

export default ContactEmail;
