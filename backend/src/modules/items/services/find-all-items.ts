import prisma from '../../prisma';

export const findAllItems = () => {
  return prisma.item.findMany({});
};
