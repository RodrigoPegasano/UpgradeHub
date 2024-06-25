/* CONDICIONALES */

/* 1. IF */
let llueve = false;
let cerrarVentanas = false;

if (llueve) {
    cerrarVentanas = true;
}

/* 2. IF - ELSE */
let cerrarVentana;

if (llueve) {
    cerrarVentana = true;
} else {
    cerrarVentana = false;
}

/* 3. ELSE - IF */
let soldados = 100;
let orcos;
let orden;

if (soldados > orcos) {
    orden = "atacar!";
} else if (soldados == orcos) {
    orden = "Defender!";
} else if (soldados < orcos) {
    orden = "Pedir refuerzos!";
} else {
    orden = "Salir corriendo!";
}

/* TERNARIO (?) */
/* Permite simplificar un condicional */

/* Pasamos de: */
let accessAllowed;
let age = 5;

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

console.log(accessAllowed);

/* Al reducido: */
let age1 = 19;

let accessAllowed1 = (age > 18) ? true : false;

console.log(accessAllowed1);

/* Ejemplo múltiple ternario */
let age2;

let message = (age < 3) ? '¡Hola, bebé!' :
    (age < 18) ? '¡Hola!' :
    (age < 100) ? '¡Felicidades!' :
    '¡Qué edad tan inusual!';