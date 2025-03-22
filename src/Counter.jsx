import React, {useState} from "react"

function Counter(){

    const [foods, setFood] = useState(['Apple','Mango','Banana'])

    function addFood(){
     const newFood = document.querySelector("#foodId").value;
     document.querySelector("#foodId").value=""
     setFood([...foods,newFood])
    }

    function removeFood(index){
     setFood(foods.filter((_,i)=>i!==index))
    }


    return(
        <>
        <h1>List of Food</h1>
        <ul>
           {foods.map((food,index)=><li key={index} onClick={()=>removeFood(index)}>{food}</li>)} 
        </ul>
        <input type="text" placeholder="Enter Food Name" id="foodId"/>
        <button onClick={addFood}>Add Food</button>
        </>
    )
}
export default Counter