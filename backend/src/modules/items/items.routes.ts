import express from 'express';
import { ItemController } from './controllers';

const router = express.Router();

router.route('/').get(ItemController.findAll);
// router.route('/:itemId').get(UserController.findById);
router.route('/').post(ItemController.create);
// router.route('/:itemId').put(UserController.update);
// router.route('/:itemId').put(UserController.delete);

export default router;
