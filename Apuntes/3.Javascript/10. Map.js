/* SET */
// Es como un array pero no permite duplicados
let arraySet = new Set();

/* MAP */
// Sirve para guardar colecciones.
// Es un objeto ordenado.

/* MODELO: */
// Crea un nuevo mapa llamado "mapa"
let mapa = new Map();

// Para agregar un dato
mapa.set("key", "value");
// Para leer un dato
mapa.get("key");

/* EJEMPLO DE SET: */
let michifu = {
    raza: "gato",
    edad: 5,
}

let morris = {
    raza: 'perro',
    edad: 6
};

let mascotasMap = new Map();

mascotasMap.set(michifu, "No dar lentejas");
mascotasMap.set(morris, "Sacar a las 9:00");

for (let [k, v] of mascotasMap) {
    console.log(k, "=", v);
}

/* EJEMPLO SET-GET */
// Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellcount) al array popularToys. Imprimelo por consola.
let popularToys = [];
const toys = [
    {id: 5, name: "Buzz MyYear", sellCount: 10},
    {id: 11, name: "Action Woman", sellCount: 24},
    {id: 23, name: "Barbie Man", sellCount: 15},
    {id: 40, name: "El Gato con Guantes", sellCount: 8},
    {id: 40, name: "El Gato Felix", sellCount: 35}
]

for (let toy of toys) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

let toysMap = new Map();
let newToysArray = new Array();
let toy1 = {id: 23, name: "Barbie Man"}; // 15
let toy2 = {id: 40, name: "El Gato con Guantes"}; // 8
let toy3 = {id: 40, name: "El Gato Felix"}; // 35

// Insertar los toy en el mapa
toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);

console.log(toysMap);

// Iterar el mapa y guardar los que tengan más de 14
for (let [k, v] of toysMap) {
    if (v > 14) {
        newToysArray.push(k);
    }
}

// Imprimir el array nuevo
console.log(newToysArray);