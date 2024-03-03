import express from 'express';
import { PhotoController } from './controllers';

const router = express.Router();

router.route('/').post(PhotoController.create);
router.route('/:photoId').put(PhotoController.update);
router.route('/:photoId').put(PhotoController.remove);

export default router;
