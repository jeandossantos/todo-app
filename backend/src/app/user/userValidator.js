import { z } from 'zod';

const validateUpdate = (data) => {
  const schema = z.object({
    id: z.string().uuid(),
    username: z.string().min(2, 'O username deve ter pelo menos 2 caracteres.'),
  });

  schema.parse(data);
};

export { validateUpdate };
