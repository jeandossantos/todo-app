import { transporter } from '../app/libs/nodemailer.js';
import { logger } from '../logs/logger.js';

const html = `<html>
<head>
    <style>
    body {
        margin: 20px; 
        background-color: #F1F0E8;
      }

    h1 {
      color: #7EAA92;
    }
    </style>
</head>
<body>
    <h1>Bem-vindo ao nosso serviço!</h1>
    <p>Obrigado por se juntar a nós. Estamos empolgados para tê-lo como parte da nossa comunidade.</p>
    <p>Fique à vontade para explorar nossos recursos e entrar em contato se precisar de alguma ajuda.</p>
    <p>Atenciosamente,</p>
    <p>A Equipe</p>
</body>
</html>`;

export function sendWelcomeEmailTo(recipient) {
  transporter.sendMail(
    {
      from: 'todo-app@gmail.com',
      to: recipient,
      subject: 'Bem-vindo(a) ao Todo APP',
      html,
    },
    (error, info) => {
      if (error) {
        logger('error.log').error(error);
        console.error(error);
      }
    }
  );
}
