import { BadRequestException } from 'http-exception-library';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { validateLogin, validateRegistration } from './validation.js';
import { sendWelcomeEmailTo } from '../../utils/sendWelcomeEmail.js';

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

    const foundUser = await this.#userRepository.findByEmail(email);

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
      {
        username: foundUser.username,
        email: foundUser.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '15m',
        subject: foundUser.id,
      }
    );

    const refreshToken = jwt.sign({}, process.env.SECRET_KEY, {
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async register(data) {
    validateRegistration(data);

    const SALT_OR_ROUNDS = 12;

    const usernameAlreadyExists = await this.#userRepository.findByUsername(
      data.username
    );

    if (usernameAlreadyExists) {
      throw new BadRequestException(
        'This username is already taken. Please choose a different one.'
      );
    }

    const emailAlreadyExists = await this.#userRepository.findByEmail(
      data.email
    );

    if (emailAlreadyExists) {
      throw new BadRequestException('This e-mail is already registered.');
    }

    data.password = await bcrypt.hash(data.password, SALT_OR_ROUNDS);
    delete data.confirmPassword;

    await this.#userRepository.create(data);

    sendWelcomeEmailTo(data.email);
  }
}
