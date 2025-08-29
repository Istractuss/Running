const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Statistics = sequelize.define('Statistics', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    averageDistance: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    averagePace: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    averageHeartRate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    totalRuns: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalDistance: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'statistics',
    timestamps: true
});

module.exports = Statistics;