/* OPERADORES LOGICOS */

/* 1. OR (||) */
/* Devuelve verdadero si uno de los valores combinados es verdadero */
let llueve = false;
let fregada = true;

let sueloMojado = llueve || fregada;

console.log(sueloMojado);

/* 2. AND (&&) */
/* Devuelve verdadero solo si todos los valores combinados son verdaderos */
let soyRico = false;
let quieroUnFerrari = true;

let vasATenerUnFerrari = soyRico && quieroUnFerrari;

console.log(vasATenerUnFerrari);

/* 3. NOT (!) */
/* Se utiliza para negar el valor de una expresión (darle el valor opuesto). */
let tengoDinero = false;

if (!tengoDinero) {
    console.log("Ir al cajero");
} else {
    console.log("No ir al cajero");
}