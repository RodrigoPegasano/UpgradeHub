/* Arrow Function */
// Es una forma de crear funciones en una única linea sin necesidad de utilizar la paçabra "function"

//Ejemplo 1 (imprimiendo texto):
const helloWorld = () => 'hola mundo';
const hello = helloWorld();

console.log(hello);

// Ejemplo 2 (Con y sin return):
// Con return
const getName = () => {
    console.log('Devolviendo nombre');
    return 'Carlos';
};

const name1 = getName();

console.log(name1);

// Sin return
const getSurname = () => 'Martín';
const surname = getSurname();

console.log(surname);

// Ejemplo 3 (Devolviendo un objeto):
const myObjt = () => ({atribute1: "atribute", atribute2: "atribute"});
const obj = myObjt();

console.log(obj);

// Ejemplo 4 (Con argumentos):
const multi = (a, b) => a * b;
const multiplication = multi(2, 2);

console.log(multiplication);

/* IMPORTANTE: High Order */
// Función normal
function traducir(idioma, palabra) {
    return idioma(palabra);
}

function aleman(palabra) {
    let diccionario = {
        'hola': 'hallo',
        'gato': 'katze',
        'animal': 'tier'
    }
    return diccionario[palabra];
}

function castellano(palabra) {
    let diccionario = {
        'hallo': 'hola',
        'katze': 'gato',
        'tier': 'animal'
    }
    return diccionario[palabra];
}

console.log(traducir(aleman, 'hola'));

// Arrow function
let diccionarioAleman = {
    'hola': 'hallo',
    'gato': 'katze',
    'animal': 'tier'
}

let diccionarioCastellano = {
    'hallo': 'hola',
    'katze': 'gato',
    'tier': 'animal'
}

const traducir = (idioma, palabra) => idioma(palabra);
const aleman = (palabra) => diccionarioAleman[palabra];
const castellano = (palabra) => diccionarioCastellano[palabra];

console.log(traducir(aleman, 'hola'));