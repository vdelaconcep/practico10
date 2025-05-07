
const router = require('express').Router();
const validation = require('../middlewares/joiValidation');
const usuario = require('../models/user')

// Datos a recibir desde el formulario:
let nombre
let edad

// Página principal
router.get('/', (req, res) => {
    res.render('index', {title: 'Formulario'});
});

// Recibir y mostrar datos
router.post('/',/*  validation(usuario), */ (req, res) => {
    let { nombre, edad } = {
        nombre: req.body.nombre,
        edad: req.body.edad
    }
    res.render('info', {
        title: 'Información',
        nombre: nombre,
        edad: edad
    })
});

// Exportar el enrutador
module.exports = router;