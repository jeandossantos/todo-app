import { Router } from 'express';
import Factory from './userFactory.js';
import ensureAuthenticated from '../../middlewares/ensureAuthenticated.js';

const controller = Factory.getInstance();
const routes = Router();

routes.put('/users/:id', controller.update.bind(controller));
routes.delete('/users/:id', controller.remove.bind(controller));
routes.patch(
  '/users/:id/avatar_url',
  ensureAuthenticated,
  controller.updateAvatar.bind(controller)
);

export default routes;
