import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { errorHandler } from './middlewares/errorHandler.js';
import { rootRoutes } from './rootRoutes.js';
import { logRequest } from './middlewares/LogRequest.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(logRequest);
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

rootRoutes(app);

app.use(errorHandler);

export { app };
