const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { updateProfile } = require('../controllers/userController');
const upload = require('../config/multerConfig');
const { updateProfileValidation } = require('../middleware/validationMiddleware');

// @route   PUT api/user/update
// @desc    Update user profile
// @access  Private
router.put('/update', authMiddleware, upload.single('image'), updateProfileValidation, updateProfile);

module.exports = router;
