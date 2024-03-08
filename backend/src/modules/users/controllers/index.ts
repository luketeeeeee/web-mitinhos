import { findAll } from './find-all';
import { findByName } from './find-by-name';
import { create } from './create';
import { update } from './update';
import { login } from './login';
import { validateJWT } from './validate-jwt';

export const UserController = {
  findAll,
  findByName,
  create,
  update,
  login,
  validateJWT,
};
