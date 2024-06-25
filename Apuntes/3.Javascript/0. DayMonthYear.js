// Existen algunos métodos si queremos utilizar el día, hora, mes, año en tiempo reañ

// Todo completo
let all = new Date();
console.log(all);

// Dia, mes y año de donde estoy
let today = new Date().toLocaleDateString();

console.log(today);

// Día
let day = new Date().getDay();
// 0 = "Domingo", 1 = "Lunes", 2 = "Martes", 3 = "Miercoles", 4 = "Jueves", 5 = "Viernes", 6 = "Sabado"
console.log(day);

// Mes
let month = new Date().getMonth();
// 0 = "Enero", 1 = "Febrero"... 11 = "Diciembre"
console.log(month);

// Año
let year = new Date().getFullYear();
console.log(year);

// Hora completa
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();

let fullTime = `${hours}:${minutes}:${seconds}`;

console.log(fullTime);