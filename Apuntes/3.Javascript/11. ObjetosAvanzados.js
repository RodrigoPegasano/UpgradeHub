/* Objetos Avanzados */
// Los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave.
// Los objetos tienen una lista de propiedades:
// Una propiedad es un par “key:value”, donde key es un string (también llamado “nombre clave”), y value puede ser cualquier cosa.
let avenger = {
	name: 'Thor', // key: name, value: Thor
	age: 30 // key: age, value: 30
}

/* 1. Existen 2 formas de crear un objeto vacío: */
// Opción 1:
let avengers = new Object(); // sintaxis de "constructor de objetos"

// Opción 2:
let theAvengers = {};  // sintaxis de "objeto literal"

/* 2. Acceder a un valor del objeto: */
console.log(avenger.name); // Imprime "Thor"

/* 3. Eliminar un valor del objeto: */
delete avenger.age;
console.log(avenger);

/* 4. Nombrando una propiedad con más de una palabra */
let avengerThor = {
    name: "Thor",
    age: 30,
    // Las claves con más de una palabra deben ir entre comillas
    "have Mjornir": true
};

/* 5. Para acceder a una propiedad con más de una palabra */
console.log(avengerThor["have Mjornir"]);

/* 6. Propiedades calculadas */
let fruit = "apple";

let bag = {
  [fruit]: 5, // El nombre de la propiedad se obtiene de la variable fruit
};

console.log(bag[fruit]);
console.log(bag);


let fruits = 'apple';
let bags = {
    [fruit + ' Computers']: 5
};

console.log(bags);

/* 7. Reduciendo propiedades */
// Nomalmente hacemos:
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user = makeUser("John", 30);

console.log(user);

// Opción reducida:
const nombre = "Abel";
const edad = 27;

let users = {
    nombre, // igual que nombre: nombre
    edad    // igual que edad: edad
};

console.log(users);

/* 8. Comprobando si existe una propiedad en determinado objeto */
let usuarios = { name: "John", age: 30 };

console.log( "age" in usuarios); // mostrará "true", usuarios.age sí existe
console.log( "blabla" in usuarios); // mostrará false, usuarios.blabla no existe

/* 9. Recorrer todas las claves de un objeto */
let user2 = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user2) {
    // claves
    console.log(key);
    // valores de las claves
    console.log(user2[key]);
}

/* 10. Creando un objeto con una función */
function crearPersona (nombre, apellido, edad, nacionalidad) {
    return {
        name: nombre,
        lastName: apellido,
        age: edad,
        country: nacionalidad,
        saludar() {
            console.log("Hola, me llamo " + this.name);
        }
    }
}

let miPersona = crearPersona("Rodrigo", "Pegasano", 25, "Argentina");

console.log(miPersona);
miPersona.saludar();

/* 11. Metodo this */
let hiUser = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" es el "objeto actual"
        console.log("Hola " + this.name);
    }
};

hiUser.sayHi();

/* 12. Object.keys */
// Para seleccionar dentro de los keys de un objeto
const data = {
    name: "Rodrigo",
    age: 25,
    languages: {
        spa: "Spanish",
        port: "Portuguese",
        eng: "English"
    }
}

let lang = data.languages[Object.keys(data.languages)[0]];

console.log(lang);

/* Ejemplo complejo */
const coches = [
    {modelo: 'Seat Ibiza', estado: 'disponible'},
    {modelo: 'BMW 120D', estado: 'mantenimiento'},
    {modelo: 'Alfa Romeo Giulia', estado: 'disponible'},
    {modelo: 'Fiat 500', estado: 'averia'},
    {modelo: 'Ford Fiesta', estado: 'disponible'},
    {modelo: 'VW Golf', estado: 'mantenimiento'},
];

console.log(`Los coches disponibles son: ${coches.filter(coche => coche.estado === 'disponible').map(coche => coche.modelo).join(', ')}.`);