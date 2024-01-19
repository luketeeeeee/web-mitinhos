import { Request, Response } from 'express';
import { findItemById, updateItem } from '../services';

export const update = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;
    const body = req.body;

    const item = findItemById(itemId);

    if (!item) {
      return res.status(404).json({
        message: 'item not found',
      });
    }

    const updatedItem = await updateItem(itemId, body);

    return res.status(200).json({
      message: 'item successfully updated',
      data: updatedItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
