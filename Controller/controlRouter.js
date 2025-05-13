
const Registro = require('../models/registroMongo');

const serverErrorRender = (req, res, err) => {
    res.status(500).render('serverError', {
        title: 500,
        error: err
    });
}


const formularioApp = (req, res) => {
    res.render('index', { title: 'Formulario'});
};

const infoApp = async (req, res) => {
    try {
        const registros = await (Registro.find());
        res.status(200).render('info', {
            title: 'Información',
            registros: registros
        });
    } catch (err) {
        serverErrorRender(req, res, err);
    }
}

const obtenerRegistros = async (req, res) => {
    try {
        const registros = await (Registro.find());
        res.status(200).json(registros)
    } catch (err) {
        serverErrorRender(req, res, err);
    }
}


const ingresarRegistro = async (req, res) => {
    try {
        const registroNuevo = {
            nombre: req.body.nombre,
            edad: req.body.edad
        };

        // Guardar registro en base de datos
        const registro = new Registro(registroNuevo);
        const registroGuardado = await registro.save();
        res.status(200).send();
        
    } catch (err) {
        serverErrorRender(req, res, err);
    }
};


const eliminarId = async (req, res) => {
    try {
        const baja = await Registro.findByIdAndDelete(req.params.id.slice(1))
        res.status(200).json(baja);
    } catch (err) {
        serverErrorRender(req, res, err);
    }
}


module.exports = {
    formularioApp,
    infoApp,
    obtenerRegistros,
    ingresarRegistro,
    eliminarId
}


