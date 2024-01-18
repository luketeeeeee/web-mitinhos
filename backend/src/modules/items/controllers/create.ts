import { Request, Response } from 'express';
import { createItem } from '../services';

export const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const newItem = await createItem(body);

    return res.status(201).json({
      message: 'item created successfully',
      data: newItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
