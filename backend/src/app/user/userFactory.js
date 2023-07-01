import UserRepository from './userRepository.js';
import UserService from './userService.js';
import UserController from './userController.js';

export default class UserFactory {
  static getInstance() {
    const userRepository = new UserRepository();

    const userService = new UserService({
      userRepository,
    });

    const controller = new UserController({
      userService,
    });

    return controller;
  }
}