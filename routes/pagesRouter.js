const {
    formularioApp,
    infoApp,
    obtenerRegistros,
    ingresarRegistro,
    eliminarId
} = require('../controller/controlRouter')

const validarRegistro = require('../validator/validacionRegistro')


const router = require('express').Router();


// Página principal (formulario)
router.get('/', formularioApp);

// Página de información (tabla con registros)
router.get('/info', infoApp);

// Obtener registros de la base de datos
router.get('/api/registros', obtenerRegistros);

// Enviar registro a la base de datos
router.post('/api/registros', validarRegistro, ingresarRegistro);

// Eliminar registro
router.delete('/api/registros/:id', eliminarId);

// Exportar el enrutador
module.exports = router;