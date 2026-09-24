export const crearTarjetaPokemon = (pokemon) => {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card card-pokemon">
             <img  src="${pokemon.sprites.front_default}" 
                    class="imagen-pokemon"
                    alt="${pokemon.name}" >
            <div class="card-body">
            <h3 class ="nombre=pokemon">
            ${pokemon.name} </h3>
        <p class = "numero-pokemon">
        #${pokemon.id} </p>
    
    <div> 
     <div>
                        ${pokemon.types.map(tipo => `
                            <span class="tipo">
                                ${tipo.type.name}
                            </span>
                        `).join("")} 
             </div>
                </div>

            </div>
        </div>
    `;
};        
