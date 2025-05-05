// Librerías
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Servidor
const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));

// Utilizar las vistas de handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


//Routing
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/info', (req, res) => {
    res.render('info');
})

app.post('/datos', (req, res) => {
    res.render('info');
})

//Middlewares para manejar errores
app.use((req, res) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1>');
})

app.use((err, req, res, next) => {
    res.status(500).send('<h1>Error interno del servidor</h1>');
})


// Exportar la configuración del servidor
module.exports = app;