import userRoutes from './app/user/userRoutes.js';
import authRoutes from './app/auth/authRoutes.js';

export function rootRoutes(app) {
  app.use(authRoutes);
  app.use(userRoutes);
}
