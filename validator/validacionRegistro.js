
const PROPIEDADES = ['nombre', 'edad']

const validarRegistro = (req, res, next) => {
    const registro = req.body;

    if (typeof registro !== 'object') res.status(400).send('Error en el formato de los datos enviados')

    const propiedadesRegistro = Object.keys(registro);

    const chequeoPropiedades = propiedadesRegistro.length === PROPIEDADES.length && propiedadesRegistro.every((propiedadRegistro) => PROPIEDADES.includes(propiedadRegistro))

    if (!chequeoPropiedades) res.status(400).send('Los datos enviados deben contener únicamente nombre y edad');

    const registroNombre = registro.nombre
    const registroEdad = registro.edad

    if (registroNombre.length < 3 || registroNombre.length > 50) res.status(400).send('El nombre debe tener entre 3 y 50 caracteres');

    if (registroEdad < 1 || registroEdad > 130) res.status(400).send('La edad debe ser un número entero positivo menor que 130');

    if(res.status != 400) next()
}

module.exports = validarRegistro;