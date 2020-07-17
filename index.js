const express = require('express');
require('dotenv').config();
const cors = require('cron');
const { dbConnection } = require('./database/config');


// crear el servidor expres
const app = express();

//Configurar cors
app.use(cors());

// Base de datos
dbConnection();

//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
});
app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en puerto ' + process.env.PORT);
})