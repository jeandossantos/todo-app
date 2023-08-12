import { HttpStatus } from 'http-exception-library';

export default class TaskController {
  #taskService;

  constructor({ taskService }) {
    this.#taskService = taskService;
  }

  async create(request, response) {
    const { title, description, priority, deadline } = request.body;
    const user_id = request.user_id;

    await this.#taskService.create({
      title,
      description,
      priority,
      deadline,
      user_id,
    });

    return response.status(HttpStatus.CREATED).send();
  }

  async update(request, response) {
    await this.#taskService.update({});

    return response.status(501).send('not implemented!');
  }

  async findById(request, response) {
    await this.#taskService.findById({});

    return response.status(501).send('not implemented!');
  }

  async find(request, response) {
    await this.#taskService.find({});

    return response.status(501).send('not implemented!');
  }

  async remove(request, response) {
    await this.#taskService.remove({});

    return response.status(501).send('not implemented!');
  }
}
