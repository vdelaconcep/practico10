// Declaración de variables

const formulario = document.querySelector('form');
const inputNombre = document.getElementById('nombre');
const inputEdad = document.getElementById('edad');
const btnEnviar = document.getElementById('btn-enviar');

const validacion = () => {
    inputNombre.addEventListener('input', () => {
        inputNombre.setCustomValidity('');
    });
    inputEdad.addEventListener('input', () => {
        inputEdad.setCustomValidity('');
    });
    let valorNombre = inputNombre.value.trim();
    let valorEdad = inputEdad.value;

    if (valorNombre.length < 3) {
        inputNombre.setCustomValidity('Este campo debe tener más de 3 caracteres');
        return false;
    } else if (valorNombre.length > 50) {
        inputNombre.setCustomValidity('Este campo no puede tener más de 50 caracteres');
        return false;
    } else if (valorEdad == '') {
        inputEdad.setCustomValidity('Debe ingresar la edad');
        return false;
    } else if (parseInt(valorEdad) <= 0) {
        inputEdad.setCustomValidity('La edad debe ser mayor que cero');
        return false;
    } else if (parseInt(valorEdad) > 130) {
        inputEdad.setCustomValidity('La edad no debe ser mayor a 130 años');
        return false;
    } else {
        return true;
    }
}

// Al Enviar el formulario
btnEnviar.addEventListener('click', (event) => {
    const datosValidos = validacion();

    if (datosValidos) {
        formulario.submit();
    };

});