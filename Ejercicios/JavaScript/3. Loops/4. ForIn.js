/* 1. Probando el For...In */
// Usa un for...in para imprimir por consola los datos del alienígena.
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const datosAlien in alien) {
    console.log(alien[datosAlien]);
}