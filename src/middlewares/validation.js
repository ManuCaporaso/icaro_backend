const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
        body('username')
            .notEmpty().withMessage('Nombre de usuario requerido.')
            .isLength({ min: 3 }).withMessage('El nombre de usuario debe tener más de 3 caracteres de longitud.'),
        body('email')
            .isEmail().withMessage('El email ingresado no es válido.')
            .normalizeEmail(),
        body('password')
            .notEmpty().withMessage('Contraseña requerida.')
            .isLength({ min: 6 }).withMessage('La contraseña debe tener más de 6 caracteres de longitud.'),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    userValidationRules,
    validate
};
