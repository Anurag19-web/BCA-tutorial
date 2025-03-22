import { useEffect, useState } from "react";
// import axios from "axios";
import { getMovie } from "./GetService";
// import { useLoaderData } from "react-router-dom"

export const Movie = () =>{
    const [data, setData] = useState([]);

    // const API="https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const getMovieData = async () =>{
        try {
            const res = await getMovie();
            console.log(res.data.Search)
            setData(res.data.Search)
        } catch (error) {
            console.log(error);
        }
    }

   useEffect(()=>{
     getMovieData();
   },[])

   return (
    <>
    <ul>
        {
            data.map((curData)=>{
                return(
                    <li key={curData.imdbID}>{curData.Title}</li>
                )
            })
        }
    </ul>
    </>
   )

}
// const moviesData= useLoaderData();
//     console.log(moviesData);
//     return(
//         <h1>Movie Page</h1>
//     )