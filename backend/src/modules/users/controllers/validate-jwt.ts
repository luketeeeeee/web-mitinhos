import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

export const validateJWT = async (req: Request, res: Response) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).json({
      message: 'failed authentication: no token',
    });
  }

  try {
    const jwtSecret = await process.env.JWT_SECRET;

    if (jwtSecret) {
      jwt.verify(token, jwtSecret, (error: any) => {
        if (error) {
          return res.status(401).json({
            message: 'failed authentication: invalid token',
          });
        }

        return res.status(200).json({
          isTokenValid: true,
          message: 'successful authentication: the token exists and its valid',
        });
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: 'internal server error',
    });
  }
};
