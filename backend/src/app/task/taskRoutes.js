import { Router } from 'express';

import Factory from './taskFactory.js';

const controller = Factory.getInstance();

const routes = Router();

routes.post('/tasks', controller.create.bind(controller));
routes.get('/tasks', controller.find.bind(controller));
routes.get('/tasks', controller.findById.bind(controller));
routes.put('/tasks/:id', controller.update.bind(controller));
routes.delete('/tasks/:id', controller.remove.bind(controller));
routes.patch('/tasks/:id/as_done', controller.toggleDone.bind(controller));
routes.patch('/tasks/:id/as_not_done', controller.toggleDone.bind(controller));

export default routes;
