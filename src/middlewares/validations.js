const { body } = require('express-validator');

// Define las validaciones para crear y actualizar un registro
const validateCampeonato = [
    body('posicion').isNumeric().withMessage('La posición debe ser un número.'),
    body('piloto').isURL().withMessage('El URL de piloto es inválido.'),
    body('numero_auto').isNumeric().withMessage('El número de auto debe ser un número.'),
    body('nombre_apellido').notEmpty().withMessage('El nombre y apellido es obligatorio.'),
    body('marca').isURL().withMessage('El URL de la marca es inválido.'),
    body('puntos').isFloat().withMessage('Los puntos deben ser un número decimal válido.'),
];

module.exports = {
    validateCampeonato
};
