import { Request, Response } from 'express';
import { findByUsername } from '../services';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const existingUser = await findByUsername(username);

  if (!existingUser) {
    return res.status(401).json({
      message: 'invalid login credentials',
    });
  }

  const validPassword = await argon2.verify(existingUser.password, password);

  if (!validPassword) {
    return res.status(401).json({
      message: 'invalid login credentials',
    });
  }

  try {
    const jwtSecret = await process.env.JWT_SECRET;

    const token = jwt.sign(
      {
        id: existingUser.id,
        username: existingUser.username,
      },
      //@ts-ignore
      jwtSecret,
      {
        expiresIn: '365d',
      }
    );

    return res.status(200).json({
      token,
      message: 'authentication completed successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
