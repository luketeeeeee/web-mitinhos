import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const createPhoto = (photo: Prisma.PhotoCreateInput) => {
  return prisma.photo.create({ data: photo });
};
