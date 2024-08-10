const { User } = require('../database/user.model');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validar que el usuario no exista
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'El usuario ya existe' });
        }

        // Crear el nuevo usuario
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });

        res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error del servidor al crear el usuario' });
    }
};
