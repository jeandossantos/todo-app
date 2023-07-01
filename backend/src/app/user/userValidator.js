import { z } from 'zod';

const validateRegistration = (data) => {
  const schema = z.object({
    name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: z.string().refine((val) => val === data.password, {
      message: 'As senhas não coincidem',
      path: ['confirmPassword'],
    }),
  });

  schema.parse(data);
};

export { validateRegistration };
