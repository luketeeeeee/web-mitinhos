import prisma from '../../prisma';

export const findItemById = (itemId: string) => {
  return prisma.item.findUnique({ where: { id: itemId } });
};
