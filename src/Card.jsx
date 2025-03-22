import { lazy, useState } from 'react'
import picture from './assets/collection-1.jpg'

// const LazyComponent = lazy(()=>import("./lazyComponent"));

function Card({items, handleClick}){

   return(
    <div>
        <ul>
            {items.map((item, index) =>(
                <li key={index} onClick={()=> handleClick(item)}>{item}</li>
            ))}
        </ul>
    </div>
   )
}
export default Card

 // return(
    //     <div className="card">
    //     <img src={picture}></img>
    //     <p id='para1'>Anurag</p>
    //     <p id='para2'>I am learning React js</p>
    //     </div>
    // );