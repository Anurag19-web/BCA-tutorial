import {useEffect, useState} from "react";
import { PokemonCard } from "../PokemonCards";

export const Api = () =>{

    const [pokemon,setPokemon] = useState([]);
    const [search,setSearch] = useState("");

    const API="https://pokeapi.co/api/v2/pokemon?Limit=24";

    const getPokemon = async () =>{
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);

        const detailedPokemonData = data.results.map( async (curPokemon)=>{
            const res = await fetch(curPokemon.url)
            const data = await res.json()
            return data;
        })

        const detailedResponse = await Promise.all(detailedPokemonData)
        console.log(detailedResponse);
        setPokemon(detailedResponse)

    } catch (error) {
        console.log(error);
    }    
    }

    useEffect(()=>{
     getPokemon();
    },[])

    const searchData = pokemon.filter((curPokemon)=>
    curPokemon.name.toLowerCase().includes(search.toLowerCase()
    ));

    return(
        <>
         <h1 className="header">Lets Catch Pokemon</h1>
         <input type="text" className="input" placeholder="Search Pokemon" name="input" value={search} onChange={(e)=>setSearch(e.target.value)} />
         <ul className="main-div">
            {
                searchData.map((curPokemon)=>{
                    // const {name,id,height,weight,order,url} = curPokemon;
                 return(
                    <PokemonCard key={curPokemon.id} pokemonData={curPokemon}/>
                 )
                })
            }
         </ul>
        </>
    )
}