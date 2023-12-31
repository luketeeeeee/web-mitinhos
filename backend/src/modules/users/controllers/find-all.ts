import { Request, Response } from 'express';
import { findAllUsers } from '../services';

export const findAll = async (req: Request, res: Response) => {
  try {
    const allUsers = await findAllUsers();

    return res.status(200).json({
      message: 'find all users',
      data: allUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
