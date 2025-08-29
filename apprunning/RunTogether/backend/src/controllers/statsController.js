const db = require('../config/database');

// Get user statistics
exports.getUserStats = async (req, res) => {
    const userId = req.params.id;
    try {
        const stats = await db.query('SELECT * FROM statistics WHERE user_id = $1', [userId]);
        if (stats.rows.length > 0) {
            res.status(200).json(stats.rows[0]);
        } else {
            res.status(404).json({ message: 'Statistics not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update user statistics
exports.updateUserStats = async (req, res) => {
    const userId = req.params.id;
    const { averageDistance, pace, heartRate } = req.body;
    try {
        const result = await db.query(
            'UPDATE statistics SET average_distance = $1, pace = $2, heart_rate = $3 WHERE user_id = $4 RETURNING *',
            [averageDistance, pace, heartRate, userId]
        );
        if (result.rows.length > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Statistics not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};