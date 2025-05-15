const Registro = require('../models/registroMongo');

const PROPIEDADES = ['nombre', 'edad']

const validarRegistro = async (req, res, next) => {
    const registro = req.body;

    // La petición debe enviarse en formato json
    if (typeof registro !== 'object') res.status(400).send('Error en el formato de los datos enviados')
    
    // Las claves del objeto json deben ser "nombre" y "edad"
    const propiedadesRegistro = Object.keys(registro);

    const chequeoPropiedades = propiedadesRegistro.length === PROPIEDADES.length && propiedadesRegistro.every((propiedadRegistro) => PROPIEDADES.includes(propiedadRegistro))

    if (!chequeoPropiedades) res.status(400).send('Los datos enviados deben contener únicamente nombre y edad');

    // Condiciones sobre el nombre y la edad
    const registroNombre = registro.nombre
    const registroEdad = registro.edad

    if (registroNombre.length < 3 || registroNombre.length > 50) res.status(400).send('El nombre debe tener entre 3 y 50 caracteres');

    if (registroEdad < 1 || registroEdad > 130) res.status(400).send('La edad debe ser un número entero positivo menor que 130');

    // No debe repetirse el nombre si ya figura en la base de datos
    const registros = await (Registro.find());
    const duplicado = registros.some(dato => dato.nombre.toLowerCase() === registroNombre.toLowerCase())

    if (duplicado) res.status(400).send('El nombre ya se encuentra registrado');

    // Una vez aprobadas las validaciones, continúa el siguiente middleware
    if(res.status != 400) next()
}

module.exports = validarRegistro;