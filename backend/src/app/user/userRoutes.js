import { Router } from 'express';
import Factory from './userFactory.js';

const controller = Factory.getInstance();
const routes = Router();

routes.put('/users/:id', controller.update.bind(controller));
routes.delete('/users/:id', controller.remove.bind(controller));
routes.patch(
  '/users/update_avatar_url',
  controller.updateAvatar.bind(controller)
);
routes.patch(
  '/users/update_password',
  controller.updatePassword.bind(controller)
);

export default routes;
