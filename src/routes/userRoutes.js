import { Router } from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { updateProfile } from '../controllers/userController.js';
import { upload } from '../config/multerConfig.js';
import { updateProfileValidation } from '../middleware/validationMiddleware.js';

const userRouter = Router();

// @route   PUT api/user/update
// @desc    Update user profile
// @access  Private
userRouter.put('/update', authMiddleware, upload.single('image'), updateProfileValidation, updateProfile);

export default userRouter;
