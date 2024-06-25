/* ARRAY */
/* Es la manera de representar un listado de elementos */

var anosMundial = [1998, 2002, 2006, 2010, 2014 ,2018, 2022];

var nombres = ["Rodrigo", "Matias", "Florencia", "Lucio"];

var listOfObjs = [
    {id: 1, name: "Rodrigo", age: 25},
    {id: 2, name: "Matias", age: 21},
    {id: 3, name: "Florencia", age: 49},
    {id: 4, name: "Lucio", age: 49}
]

/* DECLARAR Y ACCEDER A LOS ELEMENTOS DE UN ARRAY */
var avengers = ["Hulk", "SpiderMan", "AntMan"];

var avenger = avengers[0];

console.log(avenger);


/* METODOS QUE MODIFICAN EL ARRAY */
/* La siguiente array es la que vamos a modificar con los métodos */
var moderatIII = [];
moderatIII[0] = "Eating hooks";
moderatIII[1] = "Running";
moderatIII[2] = "Finder";
moderatIII[3] = "Ghostmother";
moderatIII[4] = "Reminder";
moderatIII[5] = "Intruder";
moderatIII[6] = "Animal trails";

console.log("Array inicial:")
console.log(moderatIII);

/* 1. POP() */
/* Elimina el último elemento del array */
moderatIII.pop();

console.log("POP: " + moderatIII);

/* 2. PUSH() */
/* Añade un elemento al final del array */
moderatIII.push("Ethereal");

console.log("PUSH: " + moderatIII);

/* 3. REVERSE() */
/* Invierte el orden del array */
moderatIII.reverse();

console.log("REVERSE: " + moderatIII);

/* 4. SHIFT() */
/* Elimina el primer elemento del array */
moderatIII.shift();

console.log("SHIFT: " + moderatIII);

/* 5. SORT() */
/* Ordena los elementos del array */
/* Orden alfabetica o de menor a mayor para numeros */
moderatIII.sort();

console.log("SORT: " + moderatIII);

/* 6. SPLICE() */
/* Elimina o sustituye los elementos que le decimos empezando desde el elemento que le decimos también */
/* Primer parámetro: Desde donde debe empezar */
/* Segundo parámetro: La cantidad de elementos que debe eliminar o sustituir a partir de la posición del primer parámetro */

moderatIII.splice(2,2); /* Elimina */

console.log("SPLICE ELIMINA: " + moderatIII);

moderatIII.splice(2,2,'Ethereal','Ethereal Remix vol.1','Ethereal Remix vol.2'); /* Sustituye */

console.log("SPLICE SUSTITUYE: " + moderatIII);

/* 7. UNSHIFT() */
/* Añade un elemento al principio del array */
moderatIII.unshift('Nuevo Elemento 1','Nuevo Elemento 2');

console.log("UNSHIFT: " + moderatIII);


/* METODOS QUE NO MODIFICAN LA MATRIZ */
/* Arrays para los siguiente métodos */
var moderatII = new Array();
moderatII[0] = "The Mark";
moderatII[1] = "Bad Kingdom";
moderatII[2] = "Versions";
moderatII[3] = "Milk";
moderatII[4] = "Gita";
moderatII[5] = "Damage Done";

var moderat = new Array();
moderat[0] = "Rusty nails";
moderat[1] = "Seanmonkey";
moderat[2] = "Nasty silence";
moderat[3] = "Berlin";

console.log("Arrays iniciales:");
console.log(moderatII, moderat);

/* 1. CONCAT() */
/* Junta las arrays en una sola */
var concat;

concat = moderatII.concat(moderat);

console.log("CONCAT: " + concat);

/* 2. JOIN() */
/* Por defecto, los elementos de un array los separa por comas (,). El join te permite podificar ese separador */
var estilo;

estilo = moderatII.join(" - ");

console.log("JOIN: " + estilo);

/* 3. SLICE() */
/* Hace una copia de la parte que le decimos que queremos según decimos en sus dos parámetros. */
/* Primer parámetro (OBLIGATORIO): Desde donde empieza */
/* Segundo parámetro (OPCIONAL): Donde debe terminar */
var corte;

corte = moderatII.slice(2, 4);

console.log("SLICE: " + corte);

/* 4. TOSTRING */
/* Es como el join pero no admite parámetros y el resultado es un objeto string */
var nuevaCadena;

nuevaCadena = moderat.toString();

console.log("TOSTRING: " + nuevaCadena);


/* LOCALIZAR UN VALOR EN UN ARRAY */
var modeSelector = ["Who", "Fentanyl", "Tom", "Dy", "Tom"]

console.log("Array inicial: " + modeSelector);

/* 1. INDEXOF() */
/* Devuelve la posición del elemento en el array */
/* Si el elemento no existe, devuelve -1 */
console.log("INDEXOF: " + modeSelector.indexOf("Tom"));

/* 2. LASTINDEXOF() */
/* Devuelve la posición del último elemento que coincide con el parámetro proporcionado */
/* Si el elemento no existe, devuelve -1 */
console.log("LASTINDEXOF: " + modeSelector.lastIndexOf("Tom"));

/* 3. INCLUDES */
/* Devuelve true o false si una matriz incluye determinado elemento */
console.log("INCLUDES: " + modeSelector.includes("Who"));