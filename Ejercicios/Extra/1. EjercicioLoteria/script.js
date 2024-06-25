/* IMPORTANTE: CONSEJO DEL PROFESOR!! */
// Se recomienda siempre agregar este listener primero.
// Básicamente carga todo el archivo HTML antes de empezar a agregar todo el DOM.
// Es útil para no tener problemas de si encuentra o no algo que esté en el HTML

document.addEventListener("DOMContentLoaded", function () {

    /* DEFINIR VARIABLES DE LOS BOTONES */
    let botones = document.querySelectorAll('a');

    let btnSi = botones[0];
    let btnNo = botones[1];

    /* CAMBIAR BOTONES DE LUGAR CUANDO PASAMOS EL RATÓN POR ARRIBA */
    btnSi.addEventListener("mouseover", function () {
        btnSi.innerHTML = "No";
        btnNo.innerHTML = "Si";
        btnSi.style.background = "red";
        btnNo.style.background = "green";
    });

    btnSi.addEventListener("mouseout", function () {
        btnSi.innerHTML = "Si";
        btnNo.innerHTML = "No";
        btnSi.style.background = "green";
        btnNo.style.background = "red";
    });

    /* AGREGAR PARRAFO CON TEXTO "GRACIAS POR PARTICIPAR" */
    let caja = document.querySelector("#card");

    let textoAgradecer = document.createElement("p");
    textoAgradecer.textContent = "¡Gracias por participar!";

    caja.appendChild(textoAgradecer);

});