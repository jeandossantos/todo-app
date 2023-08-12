import userRoutes from './app/user/userRoutes.js';
import authRoutes from './app/auth/authRoutes.js';
import taskRoutes from './app/task/taskRoutes.js';
import ensureAuthenticated from './middlewares/ensureAuthenticated.js';

export function rootRoutes(app) {
  app.use(authRoutes);
  app.use(userRoutes);
  app.use(ensureAuthenticated, taskRoutes);
}
