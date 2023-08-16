import { z } from 'zod';

const validateUpdate = (data) => {
  const schema = z.object({
    id: z.string().uuid(),
    username: z.string().min(2, 'O username deve ter pelo menos 2 caracteres.'),
  });

  schema.parse(data);
};

const validateRemove = (data) => {
  const schema = z.object({
    id: z.string().uuid(),
  });

  schema.parse(data);
};

const validateUpdateAvatar = (data) => {
  const schema = z.object({
    id: z.string().uuid(),
    avatar_url: z.string().url(),
  });
};

const validateUpdatePassword = (data) => {
  const schema = z.object({
    id: z.string().uuid(),
    currentPassword: z.string(),
    newPassword: z.string().min(6),
    confirmNewPassword: z.string().refine((val) => val === data.newPassword, {
      message: 'As senhas não coincidem.',
      path: ['confirmNewPassword'],
    }),
  });

  schema.parse(data);
};

export {
  validateUpdate,
  validateRemove,
  validateUpdateAvatar,
  validateUpdatePassword,
};
