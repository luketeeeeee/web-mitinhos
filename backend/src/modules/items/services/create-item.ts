import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

export const createItem = (item: Prisma.ItemCreateInput) => {
  return prisma.item.create({ data: item });
};
