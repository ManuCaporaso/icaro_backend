const Campeonato = require('../database/models');
const { validationResult } = require('express-validator');

// Obtener todos los registros
exports.getAll = async (req, res) => {
    try {
        const campeonatos = await Campeonato.findAll();
        res.json(campeonatos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un solo registro por ID
exports.getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const campeonato = await Campeonato.findByPk(id);
        if (!campeonato) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        res.json(campeonato);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo registro
exports.create = async (req, res) => {
    // Validar los datos de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { posicion, piloto, numero_auto, nombre_apellido, marca, puntos } = req.body;
    try {
        const nuevoCampeonato = await Campeonato.create({ posicion, piloto, numero_auto, nombre_apellido, marca, puntos });
        res.status(201).json(nuevoCampeonato);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un registro
exports.update = async (req, res) => {
    // Validar los datos de la solicitud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { posicion, piloto, numero_auto, nombre_apellido, marca, puntos } = req.body;
    try {
        const campeonato = await Campeonato.findByPk(id);
        if (!campeonato) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        campeonato.posicion = posicion;
        campeonato.piloto = piloto;
        campeonato.numero_auto = numero_auto;
        campeonato.nombre_apellido = nombre_apellido;
        campeonato.marca = marca;
        campeonato.puntos = puntos;
        await campeonato.save();
        res.json(campeonato);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un registro
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const campeonato = await Campeonato.findByPk(id);
        if (!campeonato) {
            return res.status(404).json({ message: 'Registro no encontrado' });
        }
        await campeonato.destroy();
        res.json({ message: 'Registro eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
