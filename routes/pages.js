
const router = require('express').Router();

// Datos a recibir desde el formulario:
let nombre
let edad

// Página principal
router.get('/', (req, res) => {
    res.render('index');
});

// Recibir y mostrar datos
router.post('/', (req, res) => {
    nombre = req.body.nombre
    edad = req.body.edad
    console.log('Datos recibidos:', req.body)
    res.render('info', {
        nombre: nombre,
        edad: edad
    })
});

// Exportar el enrutador
module.exports = router;