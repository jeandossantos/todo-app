import { logger } from '../logs/logger.js';

export function logRequest(req, res, next) {
  logger('request.log').info({
    method: req.method,
    url: req.url,
    origin: req.headers.origin,
  });

  next();
}
