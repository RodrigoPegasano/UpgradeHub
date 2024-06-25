// 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para encontrar el genero 'RPG' en el
// array .gender.

const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10 },
]

// Creando nueva array con los juegos que tienen "RPG" en .genders
let RPGgames = videogames.filter( function(game) {
    if (game.genders.includes("RPG")) {
        return game;
    }
})

// Sumando los ".score" del nuevo array que solo tiene los juegos con "RPG" en .genders
let sumaRPG = RPGgames.reduce( function(accumulator, game) {
    return accumulator + game.score;
}, 0);

// Calculando la media de los juegos "RPG"
let mediaRPG = sumaRPG / RPGgames.length;

console.log(mediaRPG);