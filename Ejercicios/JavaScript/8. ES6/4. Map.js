// 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let usersName = users.map( function(user) {return user.name} );

console.log(usersName);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let usersNames = users2.map( function(user2) {

    if (user2.name[0].includes("A")) {
        user2.name = "Anacleto";
        return user2.name;
    } else {
        return user2.name;
    }
} );

console.log(usersNames);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

let visitedCities = cities.map( function(city) {

    if (city.isVisited == true) {
        city.name = city.name + " (Visitado)";
    } else {
        city.name;
    }

    return city;

})

console.log(visitedCities);