import { Request, Response } from 'express';
import { findItemById } from '../services';

export const findById = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;

    const item = await findItemById(itemId);

    if (!item) {
      return res.status(404).json({
        message: 'item not found',
      });
    }

    return res.status(200).json({
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
