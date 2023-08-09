import * as bcrypt from 'bcrypt';

import { validateUpdate } from './userValidator.js';
import { BadRequestException } from 'http-exception-library';

export default class UserService {
  #userRepository;

  constructor({ userRepository }) {
    this.#userRepository = userRepository;
  }

  async update(id, data) {
    validateUpdate({ id, ...data });

    const foundUser = this.#userRepository.findById();

    if (!foundUser) {
      throw new BadRequestException();
    }

    await this.#userRepository.update(id, data);
  }

  async findById(id) {
    await this.#userRepository.findById(id);
  }

  async find(data) {
    await this.#userRepository.find(data);
  }

  async remove(id) {
    await this.#userRepository.remove(id);
  }
}
