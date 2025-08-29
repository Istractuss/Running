const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true
    },
    statistics: {
        type: DataTypes.JSONB,
        allowNull: true
    }
}, {
    tableName: 'users',
    timestamps: true
});

module.exports = User;