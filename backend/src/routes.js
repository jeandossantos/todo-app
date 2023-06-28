import { Router } from 'express';
import { BadRequestException } from 'http-exception-library';

const routes = Router();

routes.get('/', async (req, res) => {
  throw new BadRequestException();
});

export { routes };
