import userRoutes from './app/user/userRoutes.js';

export function rootRoutes(app) {
  app.use(userRoutes);
}
