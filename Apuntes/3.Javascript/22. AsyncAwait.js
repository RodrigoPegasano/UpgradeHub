// ASYNC Y AWAIT EJEMPLO EXPLICADO

// Async dice: "Todo lo que esté aquí dentro es asincrono"
const addCardAsync = async function(country = 'argentina') {
    // Try dice: "Intenta hacer esto
    try {
        // Await dice: "Espera hasta que lo del fetch esté hecho y luego sigues"
        const request = await fetch(`https://restcountries.com/v3.1/name/${country}`)
        const data = await request.json();
        console.log(data[0]);
    // Catch dice: "Si lo del try no funcionó, haz esto"
    } catch (error) {
        console.error(error);
    }
}

// Opción 1 de iteración:
// addCardAsync().then(result => console.log(result)).catch(error => console.error(error));

// Opción 2 de iteración:
addCardAsync();
