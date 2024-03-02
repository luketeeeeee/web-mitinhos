import { Request, Response } from 'express';
import { findItemById, updateItem } from '../services';

export const update = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;
    const { checked, concludedAt, description, title } = req.body;

    const item = findItemById(itemId);

    if (!item) {
      return res.status(404).json({
        message: 'item not found',
      });
    }

    const updatedItem = await updateItem(itemId, {
      checked,
      concludedAt,
      description,
      title,
    });

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
