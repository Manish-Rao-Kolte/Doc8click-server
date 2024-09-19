import { Router } from 'express';
import { signup, login, resetPassword } from '../controllers/authController.js';
import { signupValidation, loginValidation, resetPasswordValidation } from '../middleware/validationMiddleware.js';

const authRouter = Router();

authRouter.post('/signup', signupValidation, signup);
authRouter.post('/login', loginValidation, login);
authRouter.patch('/reset-password', resetPasswordValidation, resetPassword);

export default authRouter;