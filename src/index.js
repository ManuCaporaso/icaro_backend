const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./database/db');
const { User} = require('./database/user.model');
const { Campeonato } = require('./database/campeonato.model');
const userRouter = require('./router/userRouter');
const campeonatoRouter = require('./router/campeonatoRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas
app.use('/api/users', userRouter);
app.use('/api/campeonato', campeonatoRouter);

// Iniciar el servidor
async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos');
        await sequelize.sync({ alter: true }); // Actualiza la tabla con las nuevas columnas si es necesario
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

startServer();
