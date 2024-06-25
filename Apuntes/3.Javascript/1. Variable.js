/* CONCEPTOS BÁSICOS */

/* TIPOS DE VARIABLES */

let nombreVariable;

var nombrevariable;

const nombre_variable = 3;

// EJEMPLOS:
/* 1. Variable sin inicializar */
let nombre;

/* 2. Variable inicializada */
let edad = 25;

/* 3. Cambiar valor de la variable */
let nombreCompleto = "Rodrigo";

nombreCompleto = "Rodrigo Pegasano"

console.log(nombreCompleto);

/* 4. Asignar el valor de una variable a otra */
let comida = "Milanesa";
let miComida;

miComida = comida;

console.log(comida);
console.log(miComida);

/* CONCEPTOS AVANZADOS */

/* VARIABLES LOCALES */
/* Una variable declarada dentro de una función, solo es visible en esa función */
function showPokemon () {
    let pokemon = "Pikachu";
    console.log(pokemon);
}

showPokemon();

/* VARIABLES EXTERNAS */
/* La función consigue acceder a variables creadas fuera de la función */
let seleccion = "Francia";
let mensaje;

function mejorSeleccion () {
    seleccion = "Argentina";
    mensaje = "Obvio que es " + seleccion;
    console.log(mensaje);
}

mejorSeleccion();

/* IMPORTANTE! */
/* La función solo utiliza la variable externa si no existe la misma en local */
let hijos = 2;

function numeroHijos () {
    let hijos = 0;
    console.log(hijos);
}

numeroHijos();