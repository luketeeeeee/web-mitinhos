import express from 'express';
import { UserController } from './controllers';

const router = express.Router();

// router.route('/').get(UserController.findAll);
// router.route('/:userName').get(UserController.findByName);
router.route('/').post(UserController.create);
// router.route('/:userName').put(UserController.update);

export default router;
