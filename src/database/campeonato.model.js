const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Campeonato = sequelize.define('Campeonato', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    posicion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    piloto: {
        type: DataTypes.STRING, // Guarda la URL de la imagen del piloto
        allowNull: false
    },
    numero_auto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombre_apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING, // Guarda la URL de la imagen de la marca
        allowNull: false
    },
    puntos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'campeonato'
});

module.exports = Campeonato;
