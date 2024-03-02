import { Request, Response } from 'express';
import { updatePhoto } from '../services';

export const update = async (req: Request, res: Response) => {
  try {
    const { photoId } = req.params;
    const { subtitle } = req.body;

    const updatedPhoto = await updatePhoto(photoId, { subtitle });

    return res.status(200).json({
      message: 'photo updated successfully',
      data: updatedPhoto.subtitle,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
