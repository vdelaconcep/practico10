
const router = require('express').Router();
/* const validation = require('../middlewares/joiValidation');
const user = require('../models/user') */

// Datos a recibir desde el formulario:
let nombre
let edad

// Página principal
router.get('/', (req, res) => {
    res.render('index', {title: 'Formulario'});
});

// Recibir y mostrar datos
router.post('/', (req, res) => {
    let { nombre, edad } = {
        nombre: req.body.nombre,
        edad: req.body.edad
    }
    
    console.log('Datos recibidos:', req.body)
    res.render('info', {
        title: 'Información',
        nombre: nombre,
        edad: edad
    })
});

// Exportar el enrutador
module.exports = router;