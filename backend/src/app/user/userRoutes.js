import { Router } from 'express';
import Factory from './userFactory.js';

const controller = Factory.getInstance();
const routes = Router();

routes.post('/users', controller.create);
routes.get('/users', controller.find);
routes.get('/users', controller.findById);
routes.put('/users/:id', controller.update);
routes.delete('/users/:id', controller.remove);

export default routes;
