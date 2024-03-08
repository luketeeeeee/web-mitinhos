import express from 'express';
import { UserController } from './controllers';

const router = express.Router();

router.route('/').get(UserController.findAll);
router.route('/:username').get(UserController.findByName);
router.route('/').post(UserController.create);
router.route('/:username').put(UserController.update);
router.route('/login').post(UserController.login);
router.route('/validate-jwt').post(UserController.validateJWT);

export default router;
