/* Ejercicios DOM */

/* 1. Interacción con el DOM */

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let showMe = document.querySelector(".showme");

console.log(showMe);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let pillado = document.querySelector("#pillado");

console.log(pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
let parrafos = document.querySelectorAll("p");

console.log(parrafos);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let pokemon = document.querySelectorAll(".pokemon");

console.log(pokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
let testMe = document.querySelectorAll('[data-funcion="testMe"]');

console.log(testMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe"
let tercerShowMe = document.querySelector('[data-function="testMe"]');

console.log(tercerShowMe);


/* 2. Modificando el DOM */

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let emptyDiv = document.createElement("div");

document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let divWithP = document.createElement("div");
let pInDiv = document.createElement("p");

divWithP.appendChild(pInDiv);

document.body.appendChild(divWithP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divWith6P = document.createElement("div");
let sixP;

document.body.appendChild(divWith6P);

for (let i = 0; i < 6; i++) {
    sixP = document.createElement("p");
    divWith6P.appendChild(sixP);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let newP = document.createElement("p");
let newPText = document.createTextNode("Soy dinámico!");

newP.appendChild(newPText);

document.body.appendChild(newP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let oldDiv = document.querySelector(".fn-insert-here");

oldDiv.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newList = document.createElement("ul");

for (let app of apps) {
    let newListElement = document.createElement("li");
    newListElement.textContent = app;
    newList.appendChild(newListElement);
}

document.body.appendChild(newList);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let nodesToRemove = document.querySelectorAll(".fn-remove-me");

for (let removeNode of nodesToRemove) {
    removeNode.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
let pBetweenDivs = document.createElement("p");
pBetweenDivs.textContent = "Voy en medio!";

let lastEmptyDiv = document.querySelectorAll("div");

document.body.insertBefore(pBetweenDivs, lastEmptyDiv[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let allDivsWithClass = document.querySelectorAll(".fn-insert-here");

for (let divWithClass of allDivsWithClass) {
    let parrafoDiv = document.createElement("p");
    parrafoDiv.textContent = "Voy dentro!";

    divWithClass.appendChild(parrafoDiv);
}