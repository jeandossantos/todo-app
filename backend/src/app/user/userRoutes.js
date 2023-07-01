import { Router } from 'express';
import Factory from './userFactory.js';

const controller = Factory.getInstance();
const routes = Router();

routes.post('/users', controller.create.bind(controller));
routes.get('/users', controller.find.bind(controller));
routes.get('/users', controller.findById.bind(controller));
routes.put('/users/:id', controller.update.bind(controller));
routes.delete('/users/:id', controller.remove.bind(controller));

export default routes;
