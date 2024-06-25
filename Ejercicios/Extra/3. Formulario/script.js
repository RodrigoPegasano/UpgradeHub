// Para que lea todo el contenido antes de empezar
document.addEventListener("DOMContentLoaded", function() {

    // Capturar en un nodo el form
    let form = document.querySelector("form");
    let table = document.querySelector("table");

    // A través de un evento submit, crear una función que guarde los datos del form en un objeto
    /* const datos = {} */

    // Validar los datos

    form.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nombre = document.querySelector("#nombre");
        const email = document.querySelector("#email");
        const mensaje = document.querySelector("#mensaje");

        const datos = {
            Nombre: nombre.value,
            Email: email.value,
            Mensaje: mensaje.value
        }

        /* console.log(datos); */

        let trTable = document.createElement("tr");
        table.appendChild(trTable);

        let trNombre = document.createElement("td");
        trNombre.innerHTML = datos.Nombre;

        let trEmail = document.createElement("td");
        trEmail.innerHTML = datos.Email;

        let trMensaje = document.createElement("td");
        trMensaje.innerHTML = datos.Mensaje;

        trTable.appendChild(trNombre);
        trTable.appendChild(trEmail);
        trTable.appendChild(trMensaje);
    })

})

// RESOLUCIÓN DEL PROFESOR
/* // capturar en un nodo el form
const form = document.querySelector('form');
const table = document.querySelector('table');
//onst arrDatos = new Array();



function crearCorreo(nombre, email, mensaje) {
    return {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = crearCorreo(
        document.querySelector('#nombre').value,
        document.querySelector('#email').value,
        document.querySelector('#mensaje').value,
    );

    console.log(datos);
    let trNode = document.createElement('tr');
    table.appendChild(trNode);

    let tdNombre = document.createElement('td');
    tdNombre.innerHTML = datos.nombre;

    let tdEmail = document.createElement('td');
    tdEmail.innerHTML = datos.email;

    let tdMensaje = document.createElement('td');
    tdMensaje.innerHTML = datos.mensaje;

    trNode.appendChild(tdNombre);
    trNode.appendChild(tdEmail);
    trNode.appendChild(tdMensaje);

    document.querySelector('#nombre').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#mensaje').value = "";

}); */