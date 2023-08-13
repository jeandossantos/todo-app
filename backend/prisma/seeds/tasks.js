import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import { EXISTING_TASKS } from '../../src/tests/mocks/existing-tasks.js';

const prisma = new PrismaClient();

const date = new Date();

async function main() {
  const user = await prisma.user.create({
    data: {
      username: 'tester',
      email: 'tester@test.com',
      password: bcrypt.hashSync('94198380', 12),
    },
  });

  for (const task of EXISTING_TASKS) {
    await prisma.task.create({
      data: { ...task, user_id: user.id },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
