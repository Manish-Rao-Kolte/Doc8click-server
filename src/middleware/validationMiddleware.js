import { body } from 'express-validator';

// Middleware for signup validation
export const signupValidation = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    
    body('email')
        .isEmail().withMessage('Invalid email address')
        .notEmpty().withMessage('Email is required'),
    
    body('phoneNumber')
        .isMobilePhone().withMessage('Invalid phone number')
        .notEmpty().withMessage('Phone number is required'),
    
    body('firstName')
        .notEmpty().withMessage('First name is required'),
    
    body('lastName')
        .notEmpty().withMessage('Last name is required'),
    
    body('gender')
        .notEmpty().withMessage('Gender is required')
        .isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
    
    body('image')
        .optional().isURL().withMessage('Invalid image URL'),
    
    body('password')
        .isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters')
        .matches(/[A-Z]/).withMessage('Password must include at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must include at least one lowercase letter')
        .matches(/[0-9]/).withMessage('Password must include at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must include at least one special character')
        .notEmpty().withMessage('Password is required')
];

// Middleware for login validation
export const loginValidation = [
    body('email')
        .optional().isEmail().withMessage('Invalid email address'),
    
    body('phoneNumber')
        .optional().isMobilePhone().withMessage('Invalid phone number'),
    
    body('password')
        .optional().isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters')
];

// Middleware for update profile validation
export const updateProfileValidation = [
    body('phoneNumber')
        .optional()
        .isMobilePhone().withMessage('Invalid phone number'),
    
    body('firstName')
        .optional()
        .notEmpty().withMessage('First name is required'),
    
    body('lastName')
        .optional()
        .notEmpty().withMessage('Last name is required'),
    
    body('gender')
        .optional()
        .isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
    
    body('image')
        .optional()
        .isURL().withMessage('Invalid image URL')
];

// Middleware for update password validation

export const forgotPasswordValidation = [
    body('newPassword')
        .isLength({ min: 6, max: 20 }).withMessage('Password must be between 6 and 20 characters')
        .matches(/[A-Z]/).withMessage('Password must include at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must include at least one lowercase letter')
        .matches(/[0-9]/).withMessage('Password must include at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must include at least one special character')
        .notEmpty().withMessage('Password is required')
];