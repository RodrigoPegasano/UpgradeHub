/* TIPOS DE DATOS */

/* 1. String */
/* Nos permite almacenar cadenas de texto */
let texto = "Hola Rodrigo";

/* 2. Number */
/* Nos permite almacenar valores numéricos (tanto enteros como decimales) */
let edad = 25;

/* 3. Boolean */
/* Representa un valor lógico (true / false) */
let isActive = true;

/* 4. Null */
/* Su contenido es "null" */

/* 5. Undefined */
/* Es una variable cuyo valor aún no se ha definido */

/* 6. Object */
/* Contiene una referencia a un espacio en la memoria en el que encontramos una colección de propiedades */

/* MESCLANDO TIPOS DE VARIABLES */
let usuario = "Rodrigo" + 9 + 8;

console.log(usuario);

/* COMPROBANDO EL TIPO DE DATO */
/* Las variables pueden cambiar su tipo de dato a lo largo de la ejecución. Para saber con cual */
/* tipo estamos trabajando podemos utilizar el "typeof"                                         */
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

console.log(typeof myFun);       // devuelve "function"
console.log(typeof shape);       // devuelve "string"
console.log(typeof size);        // devuelve "number"
console.log(typeof foo);         // devuelve "object"
console.log(typeof today);       // devuelve "object"
console.log(typeof doesntExist); // devuelve "undefined"

console.log(typeof true); // devuelve "boolean"
console.log(typeof null); // devuelve "object"