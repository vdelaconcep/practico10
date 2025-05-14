// Declaración de variables

const formulario = document.querySelector('form');
const inputNombre = document.getElementById('nombre');
const inputEdad = document.getElementById('edad');
const btnEnviar = document.getElementById('btn-enviar');
const btnEliminar = document.getElementById('btn-eliminar');


// Función para chequear que el nombre no esté duplicado
const duplicado = async (nombre) => {
    try {
        const res = await fetch('/api/registros', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        console.log(data);
        return data.some(registro => {
            const mismoNombre = registro.nombre.toLowerCase() === nombre.toLowerCase();
            return mismoNombre;
        });
    } catch (err) {
        alert(`Error en la validación - ${err.message}`);
    }
};

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


// Enviar datos mediante formulario
if (btnEnviar) {
    btnEnviar.addEventListener('click', async (event) => {
        // Validación
        const datosValidos = validacion();

        if (datosValidos) {
            event.preventDefault();

            const duplic = await duplicado(inputNombre.value);

            if (duplic) {
                alert('El nombre ya se encuentra registrado')
                return;
            } else {
                // Petición 'POST' a la API
                try {
                    const res = await fetch('/api/registros', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: `nombre=${inputNombre.value}&edad=${inputEdad.value}`
                    });
                    if (res) {
                        alert('Se guardó el nuevo registro');
                        window.location.replace('/info');
                    } else {
                        alert('No se han podido guardar los datos');
                    }
                } catch (err) {
                    alert(`Error en la petición - ${err.message}`);
                }
            }
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
                
                // Petición 'DELETE' a la API
                try {
                    listaAEliminar.forEach(async (element) => {
                        id = element.id;
                        const res = await fetch(`/api/registros/:${id}`, {method: 'DELETE'});
                    });
                    location.reload();
                } catch (err) {
                    alert(`Error en la petición - ${err.message}`)
                }
            }
        } else {
            alert ('No se han seleccionado registros')
        }
    });
}
