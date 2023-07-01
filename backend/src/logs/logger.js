import winston from 'winston';
import { join } from 'node:path';
import { getCurrentDirname } from '../utils/getCurrentDirname.js';

export function loggerError(filename) {
  const filepath = `${getCurrentDirname(import.meta.url)}/${filename}`;

  return winston.createLogger({
    level: 'error', // Nível de log definido para 'error' (ou outro nível desejado)
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console(), // Log para o console
      new winston.transports.File({ filename: filepath }), // Log em arquivo
    ],
  });
}
