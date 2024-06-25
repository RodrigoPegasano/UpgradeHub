/* QUÉ ES UN OBJETO? */
/* Es una entidad con propiedades que definan sus caracteristicas. */
/* Por ejemplo, una taza tiene color, diseño, peso, material... */

/* Se pueden escribir de dos maneras: */
/* Opción 1: */
var myAvenger = new Object();
myAvenger.name = 'Captain America';
myAvenger.power = 80;
myAvenger.creator = 'Stan Lee';

/* Opción 2: */
var myAvenger = {
    name: 'Captain America',
    power: 80,
    creator: 'Stan Lee'
};

/* ACCEDER A LOS ELEMENTOS */
console.log(myAvenger.name);

console.log(myAvenger['name']);

console.log(myAvenger.hola); /* Esta propiedad no está definida, por lo tanto, le asigna valor "undefined" */