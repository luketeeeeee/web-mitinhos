import prisma from '../../prisma';

export const findByUsername = (username: string) => {
  return prisma.user.findUnique({ where: { username } });
};
