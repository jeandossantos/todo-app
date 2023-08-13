import { prisma } from '../../database/prisma.js';

export default class TaskRepository {
  async create(data) {
    return await prisma.task.create({
      data,
    });
  }

  async update(id, data) {
    return Promise.reject('method update is not implemented!');
  }

  async findById(id) {
    return await prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  async find(data) {
    return Promise.reject('method find is not implemented!');
  }

  async remove(id) {
    return await prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
