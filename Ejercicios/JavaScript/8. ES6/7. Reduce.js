// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// los alumnos usando la función .reduce()
const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

let sumaNotas = exams.reduce( function(accumulator, alumno) {
    return accumulator + alumno.score;
}, 0);

console.log(sumaNotas);

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// alumnos que esten aprobados usando la función .reduce()

let sumaAprobados = exams.reduce( function(accumulator, alumno) {
    // Considerando que se aprueba con 5
    if (alumno.score >= 5) {
        return accumulator + alumno.score;
    } else {
        return accumulator;
    }
}, 0);
console.log(sumaAprobados);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce()
// Teniendo en cuenta el primer ejercicio donde tenemos la suma de todas las notas,
// podemos almacenar en otra variable la suma total divido el length del array.

var mediaNotas = sumaNotas / exams.length;

console.log(mediaNotas);