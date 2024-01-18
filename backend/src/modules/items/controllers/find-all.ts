import { Request, Response } from 'express';
import { findAllItems } from '../services';

export const findAll = async (req: Request, res: Response) => {
  try {
    const allItems = await findAllItems();

    return res.status(200).json({
      message: 'find all items',
      data: allItems,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
