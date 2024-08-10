const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { userValidationRules, validate } = require('../middlewares/validation');

// Ruta para el registro de usuarios con validaciones
router.post('/signup', userValidationRules(), validate, userController.createUser);

module.exports = router;
