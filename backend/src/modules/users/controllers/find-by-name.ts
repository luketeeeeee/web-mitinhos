import { Request, Response } from 'express';
import { findByUsername } from '../services';

export const findByName = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    const user = await findByUsername(username);

    if (!user) {
      return res.status(404).json({
        message: 'user not found',
      });
    }

    return res.status(200).json({
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
