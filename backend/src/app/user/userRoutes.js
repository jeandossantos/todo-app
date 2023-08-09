import { Router } from 'express';
import Factory from './userFactory.js';

const controller = Factory.getInstance();
const routes = Router();

routes.put('/users/:id', controller.update.bind(controller));
routes.delete('/users/:id', controller.remove.bind(controller));

export default routes;
