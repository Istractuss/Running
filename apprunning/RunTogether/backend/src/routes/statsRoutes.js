const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

// Route to get user statistics
router.get('/user/:id', statsController.getUserStats);

// Route to update user statistics
router.put('/user/:id', statsController.updateUserStats);

// Route to get all statistics
router.get('/', statsController.getAllStats);

module.exports = router;