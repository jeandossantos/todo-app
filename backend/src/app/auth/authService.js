import { BadRequestException } from 'http-exception-library';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { validateLogin, validateRegistration } from './authValidator.js';

export default class AuthService {
  #userRepository;

  constructor({ userRepository }) {
    this.#userRepository = userRepository;
  }

  async login(data) {
    const { email, password } = data;

    if (!email || !password) {
      throw new BadRequestException('Informe email/usuário e senha.');
    }

    validateLogin(data);

    const foundUser = this.#userRepository.getByEmailOrUsername(email);

    if (!foundUser) {
      throw new BadRequestException(
        'Informe email/usuário ou senha incorreto.'
      );
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      throw new BadRequestException(
        'Informe email/usuário ou senha incorreto.'
      );
    }

    const accessToken = jwt.sign(
      process.env.SECRET_KEY,
      {
        username: foundUser.username,
        email: foundUser.email,
      },
      {
        expiresIn: '20s',
      }
    );

    const refreshToken = jwt.sign(
      {
        username: foundUser.username,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '7d',
      }
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  async register(data) {
    validateRegistration(data);

    const SALT_OR_ROUNDS = 12;

    data.password = await bcrypt.hash(data.password, SALT_OR_ROUNDS);
    delete data.confirmPassword;

    await this.#userRepository.create(data);
  }
}