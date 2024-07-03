import express from 'express';
import { ItemController } from './controllers';

const router = express.Router();

router.route('/').get(ItemController.findAll);
router.route('/:itemId').get(ItemController.findById);
router.route('/').post(ItemController.create);
router.route('/:itemId').put(ItemController.update);
router.route('/:itemId').put(ItemController.remove);

export default router;
