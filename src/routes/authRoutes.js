import { Router } from 'express';
import { signup, login, forgotPassword } from '../controllers/authController.js';
import { signupValidation, loginValidation, forgotPasswordValidation } from '../middleware/validationMiddleware.js';

const authRouter = Router();

authRouter.post('/signup', signupValidation, signup);
authRouter.post('/login', loginValidation, login);
authRouter.post('/forgot-password', forgotPasswordValidation, forgotPassword);

export default authRouter;