import { Router } from 'express';
import Factory from './authFactory.js';

const controller = Factory.getInstance();
const routes = Router();

routes.post('/register', controller.register.bind(controller));
routes.post('/login', controller.login.bind(controller));
//routes.post('/refresh/token', controller.find.bind(controller));

export default routes;
