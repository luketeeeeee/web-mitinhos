import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const updateUser = (username: string, user: Prisma.UserUpdateInput) => {
  return prisma.user.update({ where: { username }, data: user });
};
