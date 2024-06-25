/* 1. Buscar el máximo */
// Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else if (numberTwo > numberOne) {
        console.log(numberTwo);
    } else {
        console.log("Los números son iguales");
    }
}

sum(20, 5);

/* 2. Buscar la palabra más larga */
// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    var longest = param[0];
    for (var i = 0; i < param.length; i++) {
        if (longest.length < param[i].length) {
        longest = param[i];
        }
    }
    console.log(longest);
}

findLongestWord(avengers);

/* 3. Calcular la suma */
// Implemente la función denominada sumNumbers que toma un array de números como
// argumento y devuelve la suma de todos los números de la matriz.
const sumNumbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(params) {
    var sumTotal = 0;
    for (var i = 0; i < sumNumbers.length; i++) {
        sumTotal = sumTotal + params[i];
    }
    console.log(sumTotal);
}

sumAll(sumNumbers);

/* 4. Calcular el promedio */
// Calcular un promedio es una tarea extremadamente común.
const averageNumbers = [12, 21, 38, 5, 45, 37, 6];
var total = 0;
var totalAverage;

function average(param) {
    for (var i = 0; i < averageNumbers.length; i++) {
        total = total + param[i];
    }
    totalAverage = total / averageNumbers.length;
    console.log(totalAverage);
}

average(averageNumbers);

/* 5. Calcular promedio de strings */
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y
// de lo contrario cuente la longitud del string y lo sume.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
var totalNumbers = 0;
var totalStrings = 0;
var totalBoth;

function averageWord(parametro) {
    for (var i = 0; i < parametro.length; i++) {
        if (typeof parametro[i] === "string") {
            totalStrings = totalStrings + parametro[i].length;
        } else if (typeof parametro[i] === "number") {
            totalNumbers = totalNumbers + parametro[i];
        }
    }
    totalBoth = totalNumbers + totalStrings
    console.log(totalBoth);
}

averageWord(mixedElements);

/* 6. Valores únicos */
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

let arrayNew = [];

function removeDuplicates(paramDuplicates) {
    for (var i = 0; i < paramDuplicates.length; i++) {
        if (!arrayNew.includes(paramDuplicates[i])) {
            arrayNew.push(paramDuplicates[i]);
        }
    }
    console.log(arrayNew);
}

removeDuplicates(duplicates);

/* 7. Buscador de nombres */
// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro
// de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición
// de dicho elemento y por la contra un false.
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function finderName(paramFinder, elementExist) {
    for (var i = 0; i < paramFinder.length; i++) {
        if (paramFinder.includes(elementExist)) {
            return console.log(true + " - Posición: " + paramFinder.indexOf(elementExist));
        } else {
            return console.log(false);
        }
    }
}

finderName(nameFinder, "Marc");

/* 8. Contador de repeticiones */
// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

var totalRepeat = 0;
var arrayNoRepeat = [];

function repeatCounter(paramCounter) {
    for (var i = 0; i < paramCounter.length; i++) {
        if (!arrayNoRepeat.includes(paramCounter[i])) {
            arrayNoRepeat.push(paramCounter[i]);
        } else {
            totalRepeat = totalRepeat + 1;
        }
    }
    console.log(totalRepeat);
    // Agregué un poco de estilo a la hora de imprimir
    console.log("[ " + arrayNoRepeat.join(", ") + " ]");
}

repeatCounter(counterWords);