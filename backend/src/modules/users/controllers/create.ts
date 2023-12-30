import { Request, Response } from 'express';
import { findByUsername, createUser } from '../services';
import argon2 from 'argon2';

export const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const existingUser = await findByUsername(body.username);
    if (existingUser) {
      return res.status(409).json({
        message: 'username already exists',
      });
    }

    const hashPass = await argon2.hash(body.password);

    const newUser = await createUser({
      ...body,
      password: hashPass,
    });

    return res.status(201).json({
      message: 'user created successfully',
      data: newUser,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
