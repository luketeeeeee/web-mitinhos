import { Request, Response } from 'express';
import { findItemById, deleteItem } from '../services';

export const remove = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;

    const itemToRemove = findItemById(itemId);

    if (!itemToRemove) {
      return res.status(404).json({
        message: 'item not found',
      });
    }

    await deleteItem(itemId);

    return res.status(200).json({
      message: 'item deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
