// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve.
// Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.
'use strict';
const request = fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(apiData => console.log(apiData))
    .catch(error => console.log(error));

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga
// click en el botón, pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';
const input = document.querySelector("input");
const button = document.querySelector("button");

const search = (request2) => {
    request2 = fetch(`https://api.nationalize.io/?name=${input.value}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
};

button.addEventListener("click", search);

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...'El nombre X tiene un Y porciento
// de ser de Z' etc etc. EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

// Llamando los elementos del HTML
const input2 = document.querySelector("input");
const button2 = document.querySelector("button");

// Solicitud
const sentence = (request3) => {
    request3 = fetch(`https://api.nationalize.io/?name=${input2.value}`)
        .then(response => response.json())
        .then(data => {
            // Imprime por consola el array del nombre solicitado
            console.log(data);

            // Creamos un elemento para que aparezca en la página
            const newP = document.createElement('p');

            // Variable para que imprima el nombre solicitado
            const dataName = data.name;
            let text = `El nombre ${dataName} tiene `;

            // Bucle para que recorra cada uno de los países y su probabilidad
            for (let i = 0; i < data.country.length; i++) {

                let dataCountry = data.country[i].country_id;
                let dataProbability = 100 * data.country[i].probability;

                // Condiciones para que agregue el texto con una coma (,) o un punto final (.) caso sea el último elemento
                if(i < data.country.length && i != data.country.length - 1) {
                    text += `un ${dataProbability.toFixed(1)}% de ser de ${dataCountry}, `;
                } else {
                    text += `un ${dataProbability.toFixed(1)}% de ser de ${dataCountry}.`;
                }
            }

            // Agregamos el contenido de la variable "text" al nuevo elemento creado "newP"
            newP.innerHTML = text;
            document.body.appendChild(newP);
        })
        .catch(error => console.log(error));
}

button2.addEventListener("click", sentence);

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace
// click en este botón eliminemos el parrafo asociado.
// Llamando los elementos del HTML
const input3 = document.querySelector("input");
const button3 = document.querySelector("button");

// Solicitud
const sentence2 = (request3) => {
    request3 = fetch(`https://api.nationalize.io/?name=${input3.value}`)
        .then(response => response.json())
        .then(data => {
            // Imprime por consola el array del nombre solicitado
            console.log(data);

            // Creamos un elemento para que aparezca en la página
            const newDiv = document.createElement('div');
            const removeButton = document.createElement('button');
            removeButton.innerHTML = 'X';
            const newP = document.createElement('p');

            // Variable para que imprima el nombre solicitado
            const dataName = data.name;
            let text = `El nombre ${dataName} tiene `;

            // Bucle para que recorra cada uno de los países y su probabilidad
            for (let i = 0; i < data.country.length; i++) {

                let dataCountry = data.country[i].country_id;
                let dataProbability = 100 * data.country[i].probability;

                // Condiciones para que agregue el texto con una coma (,) o un punto final (.) caso sea el último elemento
                if (i < data.country.length && i != data.country.length - 1) {
                    text += `un ${dataProbability.toFixed(1)}% de ser de ${dataCountry}, `;
                } else {
                    text += `un ${dataProbability.toFixed(1)}% de ser de ${dataCountry}.`;
                }
            }

            // Agregamos el contenido de la variable "text" al nuevo elemento creado "newP"
            newP.innerHTML = text;

            newDiv.appendChild(newP);
            newDiv.appendChild(removeButton);

            document.body.appendChild(newDiv);

            // Para borrar el parrafo
            removeButton.addEventListener("click", () => {
                newDiv.remove();
            });
        })
        .catch(error => console.log(error));
}

button3.addEventListener("click", sentence2);