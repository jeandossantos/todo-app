import {
  validateRemove,
  validateUpdate,
  validateUpdateAvatar,
  validateUpdatePassword,
} from './validation.js';
import { BadRequestException, NotFoundException } from 'http-exception-library';
import bcrypt from 'bcrypt';

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

  async updateAvatar(id, data) {
    validateUpdateAvatar({ id, ...data });

    const foundUser = await this.#userRepository.findById(id);

    if (!foundUser) {
      throw new NotFoundException();
    }

    await this.#userRepository.updateAvatar(id, data);
  }

  async updatePassword(id, data) {
    validateUpdatePassword({ id, ...data });

    const foundUser = await this.#userRepository.findById(id);

    if (!foundUser) {
      throw new NotFoundException();
    }

    const isMatch = await bcrypt.compare(
      data.currentPassword,
      foundUser.password
    );

    if (!isMatch) throw new BadRequestException('Wrong current password.');

    const SALT_OR_ROUNDS = 12;
    const newPassword = await bcrypt.hash(data.newPassword, SALT_OR_ROUNDS);

    await this.#userRepository.updatePassword(id, newPassword);
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
