import { Prisma } from '@prisma/client';
import prisma from '../prisma';

export const createItem = (item: Prisma.ItemCreateInput) => {
  return prisma.item.create({ data: item });
};

export const deleteItem = (itemId: string) => {
  return prisma.item.delete({ where: { id: itemId } });
};

export const findAllItems = () => {
  return prisma.item.findMany({});
};

export const findItemById = (itemId: string) => {
  return prisma.item.findUnique({ where: { id: itemId } });
};

export const updateItem = (
  itemId: string,
  newItemData: Prisma.ItemUpdateInput,
  photoId?: string
) => {
  if (photoId) {
    return prisma.item.update({
      where: { id: itemId },
      data: { photos: { connect: { id: photoId } } },
    });
  }

  return prisma.item.update({ where: { id: itemId }, data: newItemData });
};
