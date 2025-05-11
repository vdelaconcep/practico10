const {
    formularioApp,
    enviarDatosApp,
    infoApp
} = require ('../Controller/controlRouter')


const router = require('express').Router();
const validation = require('../middlewares/joiValidation');
const usuario = require('../models/user')


// Página principal
router.get('/', formularioApp);

// Enviar y mostrar datos
router.post('/',/*  validation(usuario), */ enviarDatosApp );

// Mostrar datos (sin enviar nuevo registro)
router.get('/info', infoApp)

// Exportar el enrutador
module.exports = router;