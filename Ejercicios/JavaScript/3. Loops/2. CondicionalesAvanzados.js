/* 1. Condicionales avanzados */
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad
// isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let alumn;
let isApproved;
let approvedCount = 0;

for (let i = 0; i < alumns.length; i++) {
    alumn = alumns[i];

    if (alumn.T1 === true || alumn.T2 === true || alumn.T3 === true) {
        approvedCount = approvedCount + 1;

        if (approvedCount >= 2) {
            alumn.isApproved = true;
        } else {
            alumn.isApproved = false;
        }

    } else {
        alumn.isApproved = false;
    }
}

console.log(alumns);