import { Request, Response } from 'express';
import { findByUsername, createUser } from '../services';
import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import argon2 from 'argon2';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const create = async (req: Request, res: Response) => {
  try {
    const { bio, password, username, ...body } = req.body;

    if (body.profilePicture) {
      body.profilePicture = await cloudinary.uploader.upload(body.profilePicture);
    }

    const existingUser = await findByUsername(body.username);
    if (existingUser) {
      return res.status(409).json({
        message: 'username already exists',
      });
    }

    const hashPass = await argon2.hash(body.password);

    const newUser = await createUser({
      bio,
      password: hashPass,
      username,
      profilePicture: body.profilePicture,
    });

    return res.status(201).json({
      message: 'user created successfully',
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
