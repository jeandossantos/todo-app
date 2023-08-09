import { createTransport } from 'nodemailer';

// Configurações do transportador de e-mail
const transporter = createTransport({
  host: 'localhost', // Host do servidor MailHog
  port: 1025, // Porta do servidor MailHog
  ignoreTLS: true, // Ignorar TLS para conexão não criptografada
});

export { transporter };
