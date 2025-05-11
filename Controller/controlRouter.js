
const Registro = require('../models/registroMongo');

const mostrarInfo = (res) => {
    res.status(200).render('info', { title: 'Información' });
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
        res.status(500).json({ mensaje: 'Error al guardar el registro' });
    }
};




module.exports = {
    formularioApp,
    enviarDatosApp,
    infoApp
}


