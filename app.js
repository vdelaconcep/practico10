
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const morgan = require('morgan');
const router = require('./routes/pages');

// Servidor
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// Utilizar las vistas de handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/', router)

//Middlewares para manejar errores
app.use((req, res) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1>');
})

app.use((err, req, res, next) => {
    res.status(500).send('<h1>Error interno del servidor</h1>', err);
})


// Exportar la configuración del servidor
module.exports = app;