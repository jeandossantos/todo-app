export default class UserService {
  #userRepository;

  constructor({ userRepository }) {
    this.#userRepository = userRepository;
  }

  async create(data) {
    await this.#userRepository.create(data);
  }

  async update(id, data) {
    await this.#userRepository.update(id, data);
  }

  async findById(id) {
    await this.#userRepository.findById(id);
  }

  async find(data) {
    await this.#userRepository.find(data);
  }

  async remove(id) {
    await this.#userRepository.remove(id);
  }
}