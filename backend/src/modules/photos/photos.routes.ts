import express from 'express';
import { PhotoController } from './controllers';

const router = express.Router();

router.route('/').get(PhotoController.findAll);
router.route('/:photoId').get(PhotoController.findById);
router.route('/').post(PhotoController.create);
router.route('/:photoId').put(PhotoController.remove);

export default router;
