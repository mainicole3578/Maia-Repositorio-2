const URL_API = "https://pokeapi.co/api/v2/pokemon";

export const obtenerPokemon = async (pokemon) => {
    const respuesta = await fetch(`${URL_API}/${pokemon}`);

    if(!respuesta.ok){
         throw new Error("Pokémon no encontrado");
    }

     const datos = await respuesta.json();

    return datos;
};
export const obtenerPokemones = async () => {
    const respuesta = await fetch(`${URL_API}?limit=30`);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los Pokémon");
    }
   const datos = await respuesta.json();

    const pokemones = [];

    for (const pokemon of datos.results) {
        const respuestaPokemon = await fetch(pokemon.url);
        const datosPokemon = await respuestaPokemon.json();

        pokemones.push(datosPokemon);
    }

    return pokemones;
};

