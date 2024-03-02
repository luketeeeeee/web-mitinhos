import { Prisma } from '@prisma/client';
import prisma from '../../prisma';

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
