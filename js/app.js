import { obtenerPokemon, obtenerPokemones } from "./services/servicios.js";
import { crearTarjetaPokemon } from "./components/pokemonCard.js";

const formulario = document.getElementById("formularioBusqueda");
const busqueda = document.getElementById("busqueda");
const contenedorPokemon = document.getElementById("contenedorPokemon");
const btnVolver = document.getElementById("btnVolver");

const spinner = document.getElementById("spinner");
const textoCarga = document.getElementById("textoCarga")

const mostrarCarga = () => {spinner.classList.remove("d-none");
textoCarga.classList.remove("d-none");
};

const ocultarCarga = () => {
    spinner.classList.add ("d-none");
    textoCarga.classList.add ("d-none");
};

const cargarPokemones = async () => {
    mostrarCarga();

    try{ const pokemones = await obtenerPokemones();
        contenedorPokemon.innerHTML = " ";
        pokemones.forEach((pokemon) => {
            contenedorPokemon.innerHTML += crearTarjetaPokemon(pokemon);
        });

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudieron cargar los pokemon."
    });  
 }   finally {
        ocultarCarga();
    }
};
    

    mostrarCarga();
    try{ const pokemon = await obtenerPokemon(nombrePokemon) ;
        contenedorPokemon.innerHTML  = crearTarjetaPokemon(pokemon);
    } catch (error) {
        contenedorPokemon.innerHTML = "";

        Swal.fire({
            icon: "error",
            title: "Pokémon no encontrado",
            text: "No encontramos ese Pokémon.",
            confirmButtonText: "Volver a la lista"
        }).then(()  => {
            cargarPokemones();
        });
    } finally {
        ocultarCarga();
}
btnVolver.addEventListener("click", () => {
    busqueda.value = "";
    cargarPokemones();
});

cargarPokemones();
