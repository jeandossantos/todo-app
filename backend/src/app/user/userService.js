import { validateRemove, validateUpdate } from './userValidator.js';
import { NotFoundException } from 'http-exception-library';

export default class UserService {
  #userRepository;

  constructor({ userRepository }) {
    this.#userRepository = userRepository;
  }

  async update(id, data) {
    validateUpdate({ id, ...data });

    const foundUser = await this.#userRepository.findById(id);

    if (!foundUser) {
      throw new NotFoundException();
    }

    await this.#userRepository.update(id, data);
  }

  async findById(id) {
    await this.#userRepository.findById(id);
  }

  async remove(id) {
    validateRemove({ id });

    const foundUser = await this.#userRepository.findById(id);

    if (!foundUser) {
      throw new NotFoundException();
    }

    await this.#userRepository.remove(id);
  }
}
