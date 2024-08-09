const express = require('express');
const router = express.Router();
const campeonatoController = require('../controllers/campeonatoController');
const { validateCampeonato } = require('../middlewares/validations');
const authenticateToken = require('../middlewares/auth');

// Ruta para obtener todos los registros
router.get('/', campeonatoController.getAll);

// Ruta para obtener un solo registro por ID
router.get('/:id', campeonatoController.getOne);

// Ruta para crear un nuevo registro con validación y autenticación
router.post('/', authenticateToken, validateCampeonato, campeonatoController.create);

// Ruta para actualizar un registro con validación y autenticación
router.put('/:id', authenticateToken, validateCampeonato, campeonatoController.update);

// Ruta para eliminar un registro con autenticación
router.delete('/:id', authenticateToken, campeonatoController.delete);

module.exports = router;
