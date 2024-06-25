// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let age18plus = ages.filter(age => {

    if (age >= 18) {
        return age;
    }
});

console.log(age18plus);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let pairAges = ages2.filter(function (pair) {

    if (pair % 2 == 0) {
        return pair;
    }
});

console.log(pairAges);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

let streamersLOL = streamers.filter(function (streamer) {

    if (streamer.gameMorePlayed === "League of Legends") {
        return streamer;
    }
})

console.log(streamersLOL);

// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const streamers2 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

let streamersWithU = streamers2.filter(function (streamer) {

    if (streamer.name.includes("u")) {
        return streamer;
    }
})

console.log(streamersWithU);

// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

let stremersWithLegend = streamers2.filter(function (streamer) {

    if (streamer.gameMorePlayed.includes("Legends")) {
        return streamer;
    }
})

let streamersAge = stremersWithLegend.filter(function (streamerAge) {

    if (streamerAge.age > 35) {
        streamerAge.gameMorePlayed = "LEAGUE OF LEGENDS"
        return streamerAge;
    } else {
        return streamerAge;
    }
})

console.log(streamersAge);

// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const handleChange = (event) => {
    console.log(event);
    const filteredStreamers = streamers3.filter((streamer) =>
        streamer.name.toLowerCase().includes(input.value.toLowerCase())
    );

    console.log(filteredStreamers);
};

const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener("input", handleChange);

// 5.7 En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers4 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const filterStreamers = (event) => {
    const input = event.target.previousElementSibling;
    const filteredStreamers = streamers4.filter((streamer) =>
        streamer.name.toLowerCase().includes(input.value.toLowerCase())
    );
    console.log(filteredStreamers);
};

const button = document.querySelector(
    '[data-function="toShowFilterStreamers"]'
);

button.addEventListener("click", filterStreamers);