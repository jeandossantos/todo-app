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

  async find({ search, page, limit, user_id }) {
    const skip = page * limit - limit;

    const count = await prisma.task.count({
      where: {
        user_id,
        title: {
          startsWith: search,
          mode: 'insensitive',
        },
      },
      take: limit,
      skip,
    });

    const tasks = await prisma.task.findMany({
      where: {
        user_id: user_id,
        title: {
          startsWith: search,
          mode: 'insensitive',
        },
      },
      orderBy: {
        created_at: 'desc',
      },
      take: limit,
      skip,
    });

    return {
      tasks,
      count,
      limit,
    };
  }

  async remove(id) {
    return await prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
