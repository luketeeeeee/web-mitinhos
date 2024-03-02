import { Request, Response } from 'express';
import { createPhoto } from '../services';
import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import { updateItem } from '../../items/services';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const create = async (req: Request, res: Response) => {
  try {
    const { itemId, subtitle, ...body } = req.body;

    body.photo = await cloudinary.uploader.upload(body.photo);

    const newPhoto = await createPhoto({ subtitle, link: body.photo });

    await updateItem(itemId, {}, newPhoto.id);

    return res.status(201).json({
      message: 'photo created successfully',
      data: newPhoto,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
