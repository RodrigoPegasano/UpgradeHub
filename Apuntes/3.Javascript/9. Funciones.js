/* FUNCIONES */

/* FÓRMULA */
function nombreFuncion (parametrosFuncion) {
    // Código de la función
}

/* EJEMPLO 1 */
function printText() {
    console.log('Hello world!');
}

printText();
printText();

/* EJEMPLO 2 */
function suma (numA, numB) {

    let total = numA + numB;
    console.log(total);
}

suma(10, 5);

/* EJEMPLO 3 */
function presentacion (nombre, edad) {
    let mePresento = "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
    console.log(mePresento);
}

presentacion("Rodrigo", 25);

/* VALORES PREDETERMINADOS */
function nombre (param1, param2 = "Valor predeterminado") {
    // Param1 = Si no se asigna ningun valor al parametro, su valor predeterminado es "Undefined".
    // Param2 = Le asignamos un valor predeterminado.
}

/* NOMBRADO DE FUNCIONES */
// Las funciones son acciones, por eso, su nombre debe ser un verbo:

showMessage()       // muestra un mensaje
getAge()            // devuelve la edad (la obtiene de alguna manera)
calcSum()           // calcula una suma y devuelve el resultado
createForm()        // crea un formulario (y usualmente lo devuelve)
checkPermission()   // revisa permisos, y devuelve true/false