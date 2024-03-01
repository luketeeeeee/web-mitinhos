import { Request, Response } from 'express';
import { createItem } from '../services';
import { Prisma } from '@prisma/client';

export const create = async (req: Request, res: Response) => {
  try {
    const { description, title }: Prisma.ItemCreateInput = req.body;

    const newItem = await createItem({
      checked: false,
      concludedAt: null,
      description,
      title,
    });

    return res.status(201).json({
      message: 'item created successfully',
      data: newItem,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
