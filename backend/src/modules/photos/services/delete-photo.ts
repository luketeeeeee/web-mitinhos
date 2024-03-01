import prisma from '../../prisma';

export const deletePhoto = (id: string) => {
  return prisma.photo.delete({ where: { id } });
};
