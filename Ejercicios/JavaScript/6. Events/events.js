/* EJERCICIOS EVENTOS */

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
let boton = document.getElementById("#btnToClick");

let click = function(event) {
    console.log(event);
}

document.getElementById("btnToClick").addEventListener("click", click);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input
let inputFocus = document.querySelector(".focus");

let focus = function(event1) {
    console.log(event1.target.value);
}

inputFocus.addEventListener("focus", focus);

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input
let inputValue = document.querySelector(".value");

let input = function(event2) {
    console.log(event2.target.value);
}

inputValue.addEventListener("input", input);