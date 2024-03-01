import prisma from '../../prisma';

export const findPhotoById = (id: string) => {
  return prisma.photo.findUnique({ where: { id } });
};
