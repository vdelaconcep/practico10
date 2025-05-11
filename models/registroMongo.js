const mongoose = require('mongoose');

// Creación de esquema de contacto
const registroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    }
});

// Exportación del modelo "Contacto"
const Registro = mongoose.model('Registro', registroSchema);

module.exports = Registro;