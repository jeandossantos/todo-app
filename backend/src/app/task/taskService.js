import { validateCreateTask } from './validation.js';

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
    await this.#taskRepository.find(data);
  }

  async remove(id) {
    await this.#taskRepository.remove(id);
  }
}
