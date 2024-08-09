const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../database/user'); // Suponiendo que tienes un modelo User

// Ruta para autenticar y generar un token
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

        const accessToken = jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
