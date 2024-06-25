/* EJERCICIO EJEMPLO PROFESOR */

const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    const res = await response.json();
    // console.log(res);
    return res.results;
}

const mapPokemon = (pokemonAfterMap) => {
    // console.log(pokemonAfterMap);
    // const pokemonMapped = pokemonAfterMap.map((pokemon) => ({
    //    nombre: pokemon.name
    // }));

    // console.log(pokemonMapped);

    return pokemonAfterMap.map((pokemon) => ({
        nombre: pokemon.name
    }));
}

const drawPokemon = (mappedPokemon) => {
    // console.log(mappedPokemon);
    for (const pokemon of mappedPokemon) {

    }
}

const init = async () => {
    const pokemons = await getPokemon();
    // console.log(pokemons);

    const mappedPokemon = mapPokemon(pokemons);
    console.log(mappedPokemon);

    // drawPokemon(mappedPokemon);
}

init();

// Ejemplo bucle pokemon

        for (let id = 1; id <= 150; id++) {

            const getPokemon = async () => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                const res = await response.json();

                let nombre = res.name;
                let idPokemon = res.id;
                let tipo = [];

                for (let i = 0; i < 10; i++) {

                    if (res.types[i] != null) {
                        tipo.push(res.types[i].type.name);
                    }
                }

                let array = [nombre, idPokemon, tipo];

                console.log(array);
            }

            getPokemon();

        }