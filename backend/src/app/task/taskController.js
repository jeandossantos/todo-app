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
    const { title, description, priority, done, deadline } = request.body;
    const { id } = request.params;
    const user_id = request.user_id;

    await this.#taskService.update(id, {
      title,
      description,
      priority,
      done,
      deadline,
      user_id,
    });

    return response.status(HttpStatus.NO_CONTENT).send();
  }

  async findById(request, response) {
    await this.#taskService.findById({});

    return response.status(501).send('not implemented!');
  }

  async find(request, response) {
    const { search, page = 1, limit = 10 } = request.query;
    const user_id = request.user_id;

    const result = await this.#taskService.find({
      search,
      page: Number(page),
      user_id,
      limit: Number(limit),
    });

    return response.status(HttpStatus.OK).json(result);
  }

  async remove(request, response) {
    const { id } = request.params;
    const user_id = request.user_id;

    await this.#taskService.remove({ id, user_id });

    return response.status(HttpStatus.NO_CONTENT).send();
  }

  async toggleDone(request, response) {
    const { id } = request.params;
    const user_id = request.user_id;

    await this.#taskService.toggleDone({ id, user_id });

    return response.status(HttpStatus.NO_CONTENT).send();
  }
}
