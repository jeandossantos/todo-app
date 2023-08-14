import { HttpStatus } from 'http-exception-library';

export default class UserController {
  #userService;

  constructor({ userService }) {
    this.#userService = userService;
  }

  async update(request, response) {
    const { username } = request.body;
    const { id } = request.params;

    await this.#userService.update(id, {
      username,
    });

    return response.status(HttpStatus.NO_CONTENT).send();
  }

  async updateAvatar(request, response) {
    const { avatar_url } = request.body;
    const { id } = request.params;

    await this.#userService.updateAvatar(id, {
      avatar_url,
    });

    return response.status(HttpStatus.NO_CONTENT).send();
  }

  async remove(request, response) {
    const { id } = request.params;

    await this.#userService.remove(id);

    return response.status(HttpStatus.NO_CONTENT).send();
  }
}
