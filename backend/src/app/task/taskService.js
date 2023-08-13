import {
  validateCreateTask,
  validateDeleteTask,
  validateFindTasks,
} from './validation.js';
import { ForbiddenException } from 'http-exception-library';
export default class TaskService {
  #taskRepository;

  constructor({ taskRepository }) {
    this.#taskRepository = taskRepository;
  }

  async create(data) {
    validateCreateTask(data);

    await this.#taskRepository.create(data);
  }

  async update(id, data) {
    await this.#taskRepository.update(id, data);
  }

  async findById(id) {
    await this.#taskRepository.findById(id);
  }

  async find(data) {
    validateFindTasks(data);

    return await this.#taskRepository.find(data);
  }

  async remove(data) {
    validateDeleteTask(data);

    const foundTask = await this.#taskRepository.findById(data.id);

    if (!foundTask || foundTask.user_id !== data.user_id) {
      throw new ForbiddenException();
    }

    await this.#taskRepository.remove(data.id);
  }
}
