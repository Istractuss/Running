const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/register', userController.registerUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route for getting user profile
router.get('/profile/:id', userController.getUserProfile);

// Route for updating user profile
router.put('/profile/:id', userController.updateUserProfile);

// Route for deleting user account
router.delete('/profile/:id', userController.deleteUserAccount);

module.exports = router;