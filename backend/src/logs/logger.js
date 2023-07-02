import winston from 'winston';
import { getCurrentDirname } from '../utils/getCurrentDirname.js';

export function logger(filename) {
  const filepath = `${getCurrentDirname(import.meta.url)}/${filename}`;

  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [new winston.transports.File({ filename: filepath })],
  });
}
