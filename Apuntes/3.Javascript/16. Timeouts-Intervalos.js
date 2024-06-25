/* TIMEOUT - INTERVALOS */

// TIMEOUT: Establece un temporizador que ejecuta una función o una porción de código después de que transcurra el tiempo en milisegundos
var timeoutID;

function timeoutDosSegundos() {
    console.log("Empezando el timeout");
    // setTimeout(param1, param2)
    // param2 = Le asignamos el tiempo de espera en milisegundos
    timeoutID = setTimeout(sumar, 2000);
}

function sumar() {
    let a = 5;
    let b = 6;
    console.log(a + b);
}

timeoutDosSegundos();

// Para cancelar el timeout:
clearTimeout(timeoutID);

// INTERVAL: Ejecuta una función o un fragmento de código que recibe por parámetro de forma repetitiva cada vez que termina el tiempo determinado en milisegundos
// Funciona como el timeout pero ejecuta en bucle
var totalRepeticion;
var a = 0;

function intervalDosSegundos() {
    console.log("Empezando el interval");
    // setTimeout(param1, param2)
    // param2 = Le asignamos el tiempo de espera en milisegundos
    totalRepeticion = setInterval(contador, 1000);
}

function contador() {
    a++;
    if (a < 2) {
        console.log(a + " segundo");
    } else if (a > 1 && a <= 20) {
        console.log(a + " segundos");
    } else {
        // Para cancelar el intervalo
        clearInterval(totalRepeticion);
    }
}

intervalDosSegundos();