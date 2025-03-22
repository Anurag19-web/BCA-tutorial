export const PokemonCard = ({pokemonData}) =>{
       return(
          <div className="main-div">
          <li className="data">
          <figure>
        <img src={pokemonData.sprites.other.dream_world.front_default}
        alt={pokemonData.name}/>
        </figure>
        <h1 className="head">{pokemonData.name}</h1>
        <div>
          <p>
             {pokemonData.types.map((curType)=>curType.type.name).join(", ")}
          </p>
        </div>
        <div>
          <p>
             <span>Height:</span>{pokemonData.height}
          </p>
          <p>
             <span>Weight:</span>{pokemonData.weight}
          </p>
          <p>
             <span>speed:</span>{pokemonData.stats[5].base_stat}
          </p>
        </div>
        <div>
        <span>Experience:</span>
          <p>{pokemonData.base_experience}</p>
        </div>
        <div>
        <span>Attack:</span>
          <p>{pokemonData.stats[1].base_stat}</p>
        </div>
        <div>
        <span>Abilities:</span>
          <p>
             {
                pokemonData.abilities.map((abilityInfo)=>abilityInfo.ability.name)
                .slice(0,1)
                .join(", ")
             }
          </p>
        </div>
       </li>
       </div>
       )
    };