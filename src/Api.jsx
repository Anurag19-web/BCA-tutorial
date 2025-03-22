import { useEffect, useState } from "react"

export const Api = () =>{

    const [apiData, setApiData] = useState(null)

    const API="https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchApi = () =>{
        fetch(API)
        .then((res)=> res.json())
        .then((data)=> {setApiData(data)})
        .catch((err)=> console.log(err))
    }

    useEffect(()=>{
     fetchApi()
    },[])

    console.log(apiData.name)
    if(apiData){

    return(
        <>
        <ul>
            <li>
                <figure>
               <h1>{apiData.name}</h1>
               </figure>
            </li>
        </ul>
        </>
    )
}
}
// fetch('https://jsonplaceholder.typicode.com/posts')
// fetch('https://jsonplaceholder.typicode.com/todos/10')
//https://www.omdapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1