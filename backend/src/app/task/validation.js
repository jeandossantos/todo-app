import { z } from 'zod';

const validateCreateTask = function (data) {
  const schema = z.object({
    user_id: z.string().uuid(),
    title: z.string().min(2),
    description: z.string().optional(),
    priority: z.number().default(0),
    deadline: z.string().refine(
      (dateString) => {
        const inputDate = new Date(dateString);
        const currentDate = new Date();

        if (isNaN(inputDate.getTime())) return false;

        return inputDate > currentDate;
      },
      {
        message:
          'Deadline cannot be early than current date / deadline must be a UTC format date.',
      }
    ),
  });

  schema.parse(data);
};

const validateDeleteTask = function (data) {
  const schema = z.object({
    id: z.string().uuid(),
    user_id: z.string().uuid(),
  });

  schema.parse(data);
};

const validateFindTasks = function (data) {
  const schema = z.object({
    search: z.string().optional(),
    page: z.number(),
    limit: z.number(),
    user_id: z.string().uuid(),
  });

  schema.parse(data);
};

export { validateCreateTask, validateDeleteTask, validateFindTasks };
