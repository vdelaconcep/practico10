// Declaración de variables

const formulario = document.querySelector('form');
const inputNombre = document.getElementById('nombre');
const inputEdad = document.getElementById('edad');
const btnEnviar = document.getElementById('btn-enviar');
const btnEliminar = document.getElementById('btn-eliminar');



// Función para validar formulario (desde el front)
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

// Validación "front" del formulario
if (btnEnviar) {
    btnEnviar.addEventListener('click', () => {
        const datosValidos = validacion();

        if (datosValidos) {
            formulario.submit();
        };
    });
}

// Seleccionar y eliminar registros
if (btnEliminar) {
    btnEliminar.addEventListener('click', () => {
        const listaAEliminar = document.querySelectorAll('input[type="checkbox"]:checked');
        const cantidadAEliminar = listaAEliminar.length;
        if (cantidadAEliminar > 0) {
            let confirmacion = false;
            if (cantidadAEliminar === 1) {
                confirmacion = confirm('¿Desea eliminar el registro seleccionado?')
            } else {
                confirmacion = confirm(`¿Desea eliminar los ${cantidadAEliminar} registros seleccionados?`)
            }
            if (confirmacion) {
                console.log('Se elimina/n el/los registro/s')
            }
        } else {
            alert ('No se han seleccionado registros')
        }
    });
}
