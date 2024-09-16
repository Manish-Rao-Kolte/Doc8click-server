const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const { validationResult } = require('express-validator');

// Helper function to generate JWT tokens
const generateToken = (user) => {
    return jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '1h' });
};

// @route   POST api/auth/signup
// @desc    Register a new user
// @access  Public
// @req     { username, email, phoneNumber, firstName, lastName, }
exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, phoneNumber, firstName, lastName, gender, image, password } = req.body;

    try {
        if(!email || !phoneNumber || !password || !username || !firstName) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        let user = await User.findOne({ username });
        if (user) return res.status(400).json({ msg: 'User already exists with given username' });

        user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists with given email' });

        user = await User.findOne({ phoneNumber });
        if (user) return res.status(400).json({ msg: 'User already exists with given phone number' });

        user = new User({ username, email, phoneNumber, firstName, lastName, gender, image, password });
        await user.save();

        const token = generateToken(user);
        user.token = token;
        await user.save();
        const refreshToken = generateToken(user); // For simplicity, using the same function

        res.status(201).json({
            id: user.id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            image: user.image,
            token,
            refreshToken
        });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// @route   POST api/auth/login
// @desc    Authenticate user and get token
// @access  Public
// @req     { email, phoneNumber, password }
exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, phoneNumber, password } = req.body;

    try {
        if (!email && !phoneNumber) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        if(email) {
            if (!password) {
                return res.status(400).json({ msg: 'Please enter all fields' });
            }
        }
        const user = email ? await User.findOne({ email }) : await User.findOne({ phoneNumber });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = password ? await user.comparePassword(password) : true; // Password check is only for email login

        if (email && !isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = generateToken(user);
        user.token = token;
        await user.save();
        const refreshToken = generateToken(user); // For simplicity, using the same function

        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            image: user.image,
            token,
            refreshToken
        });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
};
