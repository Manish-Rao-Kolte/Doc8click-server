import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import {uploadImage} from '../config/cloudinaryConfig.js'; // Cloudinary upload function

// @route   PUT api/user/update
// @desc    Update user profile
// @access  Private
export const updateProfile = async (req, res) => {    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.user?.id; // Assuming user ID is in the token
    const { firstName, lastName, gender, password, address } = req.body;
    const { file } = req; // File uploaded from the request

    try {
        // Find user by ID
        const user = await User.findById(userId);        
        if (!user) return res.status(404).json({ msg: 'User not found' });

        // Prepare the fields to update
        const updatedData = {};
        if (firstName) updatedData.firstName = firstName;
        if (lastName) updatedData.lastName = lastName;
        if (gender) updatedData.gender = gender;
        if(address) updatedData.address = address;

        // Handle image upload
        if (file) {
            try {
                const imageUrl = await uploadImage(file);
                updatedData.image = imageUrl;
            } catch (error) {
                return res.status(500).json({ msg: 'Failed to upload image' });
            }
        }

        // Handle password update if user wanted to change it
        if (password) {
            // Hash the new password before saving
            // const salt = await bcrypt.genSalt(10);
            // updatedData.password = await bcrypt.hash(password, salt);
            updatedData.password = password;
        }

        // Update the user profile
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updatedData },
            { new: true, runValidators: true } // Return the updated user and run validators
        );
        
        // Return the updated user data, omitting the password
        res.json({
            id: updatedUser.id,
            username: updatedUser.username,
            email: updatedUser.email,
            phoneNumber: updatedUser.phoneNumber,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            gender: updatedUser.gender,
            image: updatedUser.image,
            token: updatedUser.token,
        });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};