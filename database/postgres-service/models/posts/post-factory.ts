import { faker } from '@faker-js/faker';

export const postFactory = async (data?: { title?: string; content?: string; authorId?: number }) => {
  const post = await prisma.post.create({
    data: {
      title: data?.title || faker.lorem.sentence(),
      content: data?.content || faker.lorem.paragraph(),
      authorId: data?.authorId || null,
    },
  });
  return post;
}; 