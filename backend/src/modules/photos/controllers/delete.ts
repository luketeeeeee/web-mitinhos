import { Request, Response } from 'express';
import { deletePhoto, findPhotoById } from '../services';

export const remove = async (req: Request, res: Response) => {
  try {
    const { photoId } = req.params;

    const photoToDelete = await findPhotoById(photoId);

    if (!photoToDelete) {
      return res.status(404).json({
        message: 'photo not found',
      });
    }

    await deletePhoto(photoId);

    return res.status(204).json({
      message: 'photo deleted successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
