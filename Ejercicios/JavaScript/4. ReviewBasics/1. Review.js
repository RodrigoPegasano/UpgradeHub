/* 1. Mix for e includes */
// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las
// categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías
// no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función .includes().
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let allCategories = [];

for (let movie of movies) {
    for (let category of movie.categories) {
        if (!allCategories.includes(category)) {
            allCategories.push(category);
        }
    }
}

console.log(allCategories);

/* 2. Mix Fors */
// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let totalSound;
let totalVolume = 0;
let totalElements = 0;
let volumeAverage;

for (let user of users) {
    for (let sounds in user.favoritesSounds) {
        totalSound = user.favoritesSounds[sounds];
        // Suma de todos los valores "volume"
        totalVolume = totalVolume + totalSound.volume;
        // Contador de veces que pasa por un "volume"
        totalElements = totalElements + 1;
    }
    volumeAverage = totalVolume / totalElements;
}

console.log("Volumen medio: " + volumeAverage);

/* 3. Mix Fors */
// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

// UTILIZAMOS EL MISMO ARRAY DEL EJERCICIO ANTERIOR

// Creando array con los elementos dentro de favoritesSounds
let arraySound = [];

for (let user of users) {
    for (let sounds in user.favoritesSounds) {
        arraySound.push(sounds);
    }
}
/* console.log(arraySound); */

// Creando array de favoritos sin elementos repetidos
let favorites = [];

for (let i = 0; i < arraySound.length; i++) {
    if (!favorites.includes(arraySound[i])) {
        favorites.push(arraySound[i]);
    }
}
/* console.log(favorites); */

// Creando contador de repeticiones
let waves = 0;
let rain = 0;
let firecamp = 0;
let shower = 0;
let train = 0;
let wind = 0;

for (let j = 0; j < arraySound.length; j++) {
        if (arraySound[j] == favorites[0]) {
            waves = waves + 1;
        } else if (arraySound[j] == favorites[1]) {
            rain = rain + 1;
        } else if (arraySound[j] == favorites[2]) {
            firecamp = firecamp + 1;
        } else if (arraySound[j] == favorites[3]) {
            shower = shower + 1;
        } else if (arraySound[j] == favorites[4]) {
            train = train + 1;
        } else if (arraySound[j] == favorites[5]) {
            wind = wind + 1;
        }
}

console.log("Total repeticiones de waves: " + waves);
console.log("Total repeticiones de rain: " + rain);
console.log("Total repeticiones de firecamp: " + firecamp);
console.log("Total repeticiones de shower: " + shower);
console.log("Total repeticiones de train: " + train);
console.log("Total repeticiones de wind: " + wind);

/* 4. Métodos findArrayIndex */
// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array
// cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
const animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (text === array[i]) {
            return console.log("Posición de " + text + " en el array: " + i);
        }
    }
}

findArrayIndex(animals, "Ajolote");

/* 5. Función rollDice */
// Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar
// el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.
// Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript Math.random();
let random;

function rollDice(lados) {
    random = Math.floor(Math.random() * lados) + 1;
    console.log("Salió el número: " + random);
}

rollDice(6);

/* 6. Función swap */
// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
const famosos = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
let primerParam;
let segundoParam;

function swap(array, param1, param2) {
    primerParam = array[param1];
    segundoParam = array[param2];

    array[param1] = segundoParam;
    array[param2] = primerParam;
}

swap(famosos, 3, 1);

console.log(famosos)