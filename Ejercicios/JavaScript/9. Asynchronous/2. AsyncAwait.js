// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.
// Async - Await
const runTimeOut = async function() {
    try {
        await new Promise((resolve) => {
            setTimeout(function () {
                resolve();
            }, 2000);
        });
        console.log('Time out!');
    } catch (error) {
        console.error(error);
    }
}

runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await.
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador.

// Async-Await
const getCharacters = async function() {
    try {
        const request = await fetch('https://rickandmortyapi.com/api/character')
        const characters = await request.json();
        console.log(characters);
    } catch (error) {
        console.error(error);
    }
}

getCharacters();