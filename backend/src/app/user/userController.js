import { HttpStatus } from 'http-exception-library';

export default class UserController {
  #userService;

  constructor({ userService }) {
    this.#userService = userService;
  }

  async update(request, response) {
    await this.#userService.update({});

    return response.status(501).send('not implemented!');
  }

  async findById(request, response) {
    await this.#userService.findById({});

    return response.status(501).send('not implemented!');
  }

  async find(request, response) {
    await this.#userService.find({});

    return response.status(501).send('not implemented!');
  }

  async remove(request, response) {
    await this.#userService.remove({});

    return response.status(501).send('not implemented!');
  }
}
