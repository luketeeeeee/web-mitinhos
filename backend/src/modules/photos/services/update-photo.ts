import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const updatePhoto = (id: string, photo: Prisma.PhotoUpdateInput) => {
  return prisma.photo.update({ where: { id }, data: photo });
};
