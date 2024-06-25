// CLASE DEL PROFESOR EXPLICANDO LOS DIFERENTES TIPOS DE ASINCRONIA (Realizar peticiones a APIs):
// En este curso veremos:
//      > Promesas
//      > Async / Await

// Antiguamente se utilizaba otro método y el profesor nos va a explicar como era. Es el:
//      > AJAX

// ¿Qué es una API?
// Es una forma para que dos aplicaciones hablen entre sí. Normalmente la que pide y la que da.

// ¿Qué es asincronia?
// Reproduce algo en segundo plano mientras que sigue funcionando el resto del codigo
// Ejemplo para entenderlo:

console.log("1");
setTimeout( () => {
    console.log("2");
    console.log("3");
}, 3000); // Asincronia
console.log("4");
console.log("5");