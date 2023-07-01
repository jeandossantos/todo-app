import { STATUS_CODES } from 'http';
import { HttpException, HttpStatus } from 'http-exception-library';
import { ZodError } from 'zod';
import { loggerError } from '../logs/logger.js';

export function errorHandler(error, req, res, next) {
  try {
    if (error instanceof HttpException) {
      return res.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode,
        error: error.error,
      });
    }

    if (error instanceof ZodError) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }

    loggerError('error.log').error(error);

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send(STATUS_CODES[HttpStatus.INTERNAL_SERVER_ERROR]);
  } catch (error) {
    loggerError('error.log').error(error);

    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .send(STATUS_CODES[HttpStatus.INTERNAL_SERVER_ERROR]);
  }
}
