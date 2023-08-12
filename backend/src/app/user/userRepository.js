import { prisma } from '../../database/prisma.js';

export default class UserRepository {
  async create({ username, email, password, githubId, googleId }) {
    const firstTask = {
      title: 'Fazer primeiro Login à plataforma :)',
      description:
        'Essa tarefa foi criado pelo plataforma ao registrar o usuário',
      priority: 2,
      deadline: new Date().toISOString(),
    };

    return await prisma.user.create({
      data: {
        username,
        email,
        password,
        githubId,
        googleId,
        Task: {
          create: {
            ...firstTask,
          },
        },
      },
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

  async findByUsername(username) {
    return await prisma.user.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: username,
        },
      },
    });
  }

  async find(data) {
    return Promise.reject('method find is not implemented!');
  }

  async remove(id) {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
