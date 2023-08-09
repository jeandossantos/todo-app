import { prisma } from '../../database/prisma.js';

export default class UserRepository {
  async create(data) {
    return await prisma.user.create({
      data,
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email) {
    return await prisma.user.findFirst({
      where: {
        email: {
          mode: 'insensitive',
          equals: email,
        },
      },
    });
  }

  async find(data) {
    return Promise.reject('method find is not implemented!');
  }

  async remove(id) {
    return Promise.reject('method remove is not implemented!');
  }
}
