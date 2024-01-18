import { Request, Response } from 'express';
import { findByUsername, updateUser } from '../services';

export const update = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const body = req.body;

    const user = findByUsername(username);

    if (!user) {
      return res.status(404).json({
        message: 'user not found',
      });
    }

    const updatedUser = await updateUser(username, body);

    return res.status(200).json({
      message: 'user successfully updated',
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
