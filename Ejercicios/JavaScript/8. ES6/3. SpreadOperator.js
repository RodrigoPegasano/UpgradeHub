// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

let copyPointList = [...pointsList];

console.log(copyPointList);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let copyToy = {...toy};

console.log(copyToy);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

let copyPointsList = [...pointsList1, ...pointsLis2];

console.log(copyPointsList);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toys = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toysUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let copyAllToys = {...toys, ...toysUpdate};

console.log(copyAllToys);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let copyColors = [...colors];
copyColors.splice(2, 1);

console.log(copyColors);