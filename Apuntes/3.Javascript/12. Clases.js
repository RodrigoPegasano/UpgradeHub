/* CLASES */
// las clases se crean con la palabra reservada Class, por convención la primera letra es en mayúsculas.

class Perro {
    // CONSTRUCTOR: lo usaremos si queremos obligar a que se proporcionen determinados datos (atributos) en el momento de instanciar la clase.
    constructor(nombre, nombreDueno, raza, edad) {
        this.nombre = nombre;
        this.nombreDueno = nombreDueno;
        this.raza = raza;
        this.edad = edad;
        this.zapatosDestruidos = 0; // podemos crear clases con atributos con un balor determinado.
    }

    // UNA VEZ HEMOS DEFINIDO LOS ATRIBUTOS, PODREMOS DEFINIR MÉTODOS.
    ladrar() {
        console.log('ruf ruf');
    }

    morderZapato() {
        this.zapatosDestruidos++;
    }
}

// Ahora podemos crear objetos tipo Perro, asegurándonos de que todos los objetos que se creen van a seguir el patrón de diseño que hemos definido.

const milu = new Perro('Milú', 'Tintín', 'Fox Terrier', 6);
const scoobyDoo = new Perro('Scooby-Doo', 'Shaggy', 'Gran Danés', 7);

// y podemos usar los métodos que hayamos creado(*).
milu.ladrar();
console.log(milu);
console.log(scoobyDoo);