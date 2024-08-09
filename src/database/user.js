const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db'); // Importa la instancia de Sequelize

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'users'
});
module.exports = User;
