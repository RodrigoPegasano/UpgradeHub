/* ES6 */
/* NO TERMINÉ LOS APUNTES */

// 1. Object desctruturing
// Permite extraer de manera rápida ciertos valores de un objeto:
let marvelCharacter = {
	name: {
		heroName: 'Doctor Strange',
		humanName: 'Stephen Vincent Strange'
	},
	team: ['Avengers', 'Iluminati']
}

// Ejemplo 1:
let { name, team } = marvelCharacter;

// Podemos acceder a las propiedades sin el marvelCharacter -> ya asignado.
console.log(name.heroName, name.humanName);
console.log(team[0], team[1]);

// Ejemplo 2
let { heroName, humanName } = marvelCharacter.name;

console.log(heroName);
console.log(humanName);

// 2. Spread Operator
// permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).

    // EN ARRAYS
    let xmen = ['Ciclops', 'Beast', 'Angel', 'Marvel-girl'];
    let newXmen = ['Wolverine', 'NightCrawler', 'Storm'];

    // Para concatenar
    let myMutants = [...xmen, ...newXmen];

    console.log(myMutants);

    // Para copiar un array
    let xmenCopy = [...xmen];

    console.log(xmenCopy);

    // Para jugar con un array sin modificar el original
    let lastMutant = [...xmen].reverse();

    console.log(lastMutant);

    // Comprobando que los originales siguen igual
    console.log(xmen);
    console.log(newXmen);

    // EN PARÁMETROS
    function suma(a, b, c) {
        console.log(a + b + c);
    }

    const numbers = [1, 2, 3];

    suma(...numbers);

    // EN STRINGS
    const myTeam = 'RAYO';
    const characters = [ ...myTeam ];

    console.log(characters);

    // EN OBJETOS
    const obj1 = { firstName: 'Foo', age: 22 };
    const obj2 = { lastName: 'Bar', gender: 'M' };

    const newObj = { ...obj1, ...obj2, planet: 'Earth' };

    console.log(newObj);

    // DESTRUCTURANDO CON SPREAD OPERATOR
    const details = {
        firstName: 'Code',
        lastName: 'Burst',
        age: 22
    };
    // Saca el valor 22 y deja el resto de atributos
    const { age, ...restOfTheDetails } = details;
    console.log(age, restOfTheDetails);

    // 3. Import / Export
    // Export se utiliza al crear módulos de JavaScript para exportar funciones, objetos o tipos de dato primitivos
    // del módulo para que puedan ser utilizados por otros programas con la sentencia import.

    /* export { name1, name2, …, nameN };
    export { variable1 as name1, variable2 as name2, …, nameN };
    export let name1, name2, …, nameN; // también var
    export let name1 = …, name2 = …, …, nameN; // también var, const
    export function FunctionName() {...}

    import * from …;
    import { name1 as pepe, name2, …, nameN } from …;
    import { import1 as name1, import2 as name2, …, nameN } from …;
    import { default } from …; */

    // 4. array.map()
    // Almacena lo que le pidamos en otro array
    var officers = [
        { id: 20, name: 'Captain Piett' },
        { id: 24, name: 'General Veers' },
        { id: 56, name: 'Admiral Ozzel' },
        { id: 88, name: 'Commander Jerjerrod' }
    ];
    // Lo que necesitamos [20, 24, 56, 88]

    // Usando forEach:
    const officerIds = [];
    officers.forEach(function (element){
        officerIds.push(element.id);
    });

    // Usando forOF
    for(const element of officers){
        officerIds.push(element.id);
    }

    // Usando map()
    const officersIds = officers.map(function(officer) {return officer.id});

    console.log(officerIds);

    // Ejemplo 2
    var arr = [{
        id: 1,
        name: 'bill'
    }, {
        id: 2,
        name: 'ted'
    }]

    var result = arr.map(person => ({ value: person.id, text: person.name }));

    console.log(result);

    // 5. array.filter()
    // Nos permite seleccionar solo los elementos que queremos del array
    var pilots = [
        { id: 2, name: "Wedge Antilles", faction: "Rebels", },
        { id: 8, name: "Ciena Ree", faction: "Empire", },
        { id: 40, name: "Iden Versio", faction: "Empire", },
        { id: 66, name: "Thane Kyrell", faction: "Rebels", }
    ];

    var rebels = pilots.filter(function (pilot) {
        return pilot.faction === "Rebels";
    });

    console.log(rebels);

    var empires = pilots.filter(function (pilot) {
        return pilot.faction === "Empire";
    });

    console.log(empires);

    // CON ARROW FUNCTION
    const rebel = pilots.filter(pilot => pilot.faction === "Rebels");

    const empire = pilots.filter(pilot => pilot.faction === "Empire");

    // 6. array.find()
    // Nos muestra el primer elemento que cumpla con la función proporcionada
    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(function(element) { return element > 10});

    console.log(found);

    // 7. array.reduce()
    // Agarra los valores que le decimos y los junta, dependiendo lo que le pidamos que haga en el primer parametro
    // accumulator = Puede ser entero, string, objeto...
    // array

    // Ejemplo 1:
    var pilots = [
        { id: 10, name: "Poe Dameron", years: 14, },
        { id: 2, name: "Temmin 'Snap' Wexley", years: 30, },
        { id: 41, name: "Tallissan Lintra", years: 16, },
        { id: 99, name: "Ello Asty", years: 22, }
    ];

    var totalYears = pilots.reduce(function (accumulator, pilot) {return accumulator + pilot.years;}, 0);

    console.log(totalYears);

    // Ejemplo 2:
    var mostExpPilot = pilots.reduce(function (oldest, pilot) {return (oldest.years || 0) > pilot.years ? oldest : pilot;}, {});

    console.log(mostExpPilot);

    // 8. Template strings
    // Una nueva manera de concatenar contenido en Js ha llegado y lo vamos a ver a través de un ejemplo:
    let myName = 'Alberto';
    let job = 'Frontend Developer';

    // old school
    console.log('my name is ' + myName + 'and my job is ' + job);

    // new wave
    console.log(`my name is ${myName} and my job is ${job}`);

    // Add to HTML
    const contentApp = document.querySelector('#nameSelector');
    let html = `<ul>
        <li>name: ${myName}</li>
        <li>job: ${job}</li>
    </ul>`;

    contentApp.innerHTML = html;