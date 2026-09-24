const URL_API = "https://pokeapi.co/api/v2/pokemon";

export const obtenerPokemon = async (pokemon) => {
    const respuesta = await fetch(`${URL_API}/${pokemon}`);

    if(!respuesta.ok){
         throw new Error("Pokémon no encontrado");
    }

     const datos = await respuesta.json();

    return datos;
};
