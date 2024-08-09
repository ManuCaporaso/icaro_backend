const jwt = require('jsonwebtoken');

// Middleware para verificar el token JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extrae el token del encabezado

    if (token == null) return res.status(401).json({ message: 'Token no proporcionado' });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.user = user; // Agrega el usuario al objeto de solicitud
        next();
    });
}

module.exports = authenticateToken;
