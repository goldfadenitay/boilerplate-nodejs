import { faker } from '@faker-js/faker';

export const createUser = async (data?: { name?: string; email?: string }) => {
  const user = await prisma.user.create({
    data: {
      name: data?.name || faker.person.fullName(),
      email: data?.email || faker.internet.email(),
    },
  });
  return user;
};