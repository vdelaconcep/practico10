
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const morgan = require('morgan');
const router = require('./routes/pagesRouter');

// Servidor
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());

// Utilizar las vistas de handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
app.use('/', router)

//Middlewares para manejar errores
app.use((req, res) => {
    res.status(404).render('notfound', {title: '404'});
})

app.use((err, req, res, next) => {
    res.status(500).render('serverError', {
        title: 500,
        error: err
    });
})


// Exportar la configuración del servidor
module.exports = app;