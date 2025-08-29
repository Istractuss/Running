const User = require('../models/user');

// Register a new user
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await User.create({ name, email, password });
        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error });
    }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching user profile', error });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update({ name, email, password });
        res.status(200).json({ message: 'User profile updated successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error updating user profile', error });
    }
};