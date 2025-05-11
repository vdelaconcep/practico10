
const Registro = require('../models/registroMongo');

const mostrarInfo = async (res) => {
    try {
        const registros = await (Registro.find());
        res.status(200).render('info', {
            title: 'Información',
            registros: registros
        });
    } catch (err) {
        res.status(500).render('serverError', {
            title: 500,
            error: err
        });
    }
}


const formularioApp = (req, res) => {
    res.render('index', { title: 'Formulario' });
};


const infoApp = (req, res) => {
    mostrarInfo(res);
};


const enviarDatosApp = async (req, res) => {
    try {
        const registroNuevo = {
            nombre: req.body.nombre,
            edad: req.body.edad
        };

        // Registro en base de datos
        const registro = new Registro(registroNuevo);
        const registroGuardado = await registro.save();
        mostrarInfo(res);
        
    } catch (err) {
        res.status(500).render('serverError', {
            title: 500,
            error: err
        });
    }
};


const eliminarIdApp = async (req, res) => {
    try {
        const baja = await Registro.findByIdAndDelete(req.params.id.slice(1))
        mostrarInfo(res)
    } catch (err) {
        res.status(500).render('serverError', {
            title: 500,
            error: err
        });
    }
}


module.exports = {
    formularioApp,
    enviarDatosApp,
    infoApp,
    eliminarIdApp
}


