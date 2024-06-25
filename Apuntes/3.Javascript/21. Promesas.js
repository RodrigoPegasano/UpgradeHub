// Ejemplo base:
const ganarLoteria = new Promise(function(resolve, reject) {
    setTimeout(function() {
        const number = Math.random();
        if (number > 0.5) {
            resolve('Ganaste la loteria!');
        } else {
            reject(new Error('Perdiste la loteria'));
        }
    })
});

ganarLoteria.then(result => console.log(result)).catch(error => console.error(error));

// ------------------------------------------------------------------------------

'use strict';

// Ejemplo país - Opción 1:
const request = fetch('https://restcountries.com/v3.1/name/spain')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Ejemplo país - Opción 2:
const request2 = fetch('https://restcountries.com/v3.1/name/spain')
    .then( function(response) {
        return response.json();
    })
    .then( function(data) {
        if (data) {
            return data;
        }
    })
    .catch( function(error) {
        console.log(error);
    });

// Ejemplo de gatos - Opción 1:
const request3 = (count) => fetch(`https://meowfacts.herokuapp.com/?count=${count}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

request3(3);