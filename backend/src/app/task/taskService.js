import {
  validateCreateTask,
  validateDeleteTask,
  validateFindTasks,
  validateToggleTaskDone,
  validateUpdateTask,
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
    validateUpdateTask({ ...data, id });

    const foundTask = await this.#taskRepository.findById(id);

    if (!foundTask || foundTask.user_id !== data.user_id) {
      throw new ForbiddenException();
    }

    delete data.user_id;

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

  async toggleDone(data) {
    validateToggleTaskDone(data);

    const foundTask = await this.#taskRepository.findById(data.id);

    if (!foundTask || foundTask.user_id !== data.user_id) {
      throw new ForbiddenException();
    }

    await this.#taskRepository.toggleDone({
      id: foundTask.id,
      isDone: !foundTask.done,
    });
  }
}
