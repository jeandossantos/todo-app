import { STATUS_CODES } from 'http';
import { HttpException, HttpStatus } from 'http-exception-library';

export function errorHandler(error, req, res, next) {
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      message: error.message,
      statusCode: error.statusCode,
      error: error.error,
    });
  }

  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send(STATUS_CODES[HttpStatus.INTERNAL_SERVER_ERROR]);
}
