/* BUCLES */
/* Los bucles permiten iterar por listas, para recorrerlas y realizar operativa sobre cada uno de sus items */

/* 1. FOR */
for (var i = 0; i < 10; i++) {
    var element = i;
    console.log(element);
}

/* 2. FOREACH */
var myArray = ['Alberto', 'Mario', 'Jose', 'Juan'];

myArray.forEach(
    function (element) {
    console.log(element);
    }
);

/* 3. FOR...OF */
// Automátiamente nos devuelve los valores
// Nos permite iterar a través de los elementos de objetos iterables como String, Array, Set, Map, etc

// Iteración sobre Array
var justiceLeague = ['Batman', 'Aquaman', 'Superman'];

for (const justice of justiceLeague) {
    console.log(justice);
}

// Iteración sobre String
var clark = 'Superman';

for (var who of clark) {
	console.log(who);
}

// Iteración sobre Arguments (los argumentos/parámetros de una función)
function crazyContainer() {
	for (var value of arguments) {
	    console.log(value);
    }
}
crazyContainer(justiceLeague, 8, clark);

/* 4. FOR...IN */
// Recorre las claves de un objeto
// Recorre todos los índices del objeto, de manera que podemos ir accediendo a cada una de sus propiedades

// Definimos un objeto con los datos de spiderman
var spiderman = {
    Nombre: "Peter",
    Apellido: "Parker",
    Pais: "USA",
    Profesion: "Student"
}

for (const key in spiderman) {
    console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}

/* 5. WHILE */
let day = 21;

while (day < 30 && day > 20) {
    console.log("Es fin de semana");
    day++;
}

/* 6. WHILE...DO */
let colaDeGente = 10;

do {
    console.log("Hola");
    colaDeGente--;
} while (colaDeGente > 0);

/* 7. SWITCH...CASE */
let meses = ["marzo", "abril", "mayo"];

switch(meses) {
    case "marzo":
        console.log("Llevar gorra");
        break;
    case "abril":
        console.log("Llevar sudadera");
        break;
    case "mayo":
        console.log("Llevar mucho abrigo!");
        break;
    default:
        console.log("Error");
        break;
}