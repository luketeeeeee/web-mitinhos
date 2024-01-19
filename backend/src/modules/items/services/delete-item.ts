import prisma from '../../prisma';

export const deleteItem = (itemId: string) => {
  return prisma.item.delete({ where: { id: itemId } });
};
