import UserRepository from '../user/userRepository.js';
import AuthService from './authService.js';
import AuthController from './authController.js';

export default class AuthFactory {
  static getInstance() {
    const userRepository = new UserRepository();

    const authService = new AuthService({
      userRepository,
    });

    const controller = new AuthController({
      authService,
    });

    return controller;
  }
}
