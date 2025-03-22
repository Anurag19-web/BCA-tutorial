import { useState } from "react"
import './App.css'

export const Todo = () =>{
  
 const[inputValue,setInputValue] = useState("")
 const[task,setTask] = useState([])
 const [dateTime,setDateTime] = useState("")

 const now=new Date();
 const date=now.toLocaleDateString();
 const time=now.toLocaleTimeString();
 
 setInterval(()=>{
    const now=new Date();
    const date=now.toLocaleDateString();
    const time=now.toLocaleTimeString();
    setDateTime(`${date}${time}`)
 },1000)

 function handleInputValue(value){
  setInputValue(value)
 }

 function handleSubmit(event){
   event.preventDefault();
   if(!inputValue) return;

   if(task.includes(inputValue)){
   return;
   }

   setTask((prev)=>[...prev,inputValue])
   setInputValue("");
 }

 function handleClear(){
setTask([])
 }

    return(
        <>
       <form onSubmit={handleSubmit}>
        <h1 className="head">Todo List</h1>
        <p className="date-time">{date}-{time}</p>
        <input type="text" className="input" onChange={(event)=>handleInputValue(event.target.value)} value={inputValue}/>
        <button type="submit" className="task">Add Task</button>
        </form>
        <section>
        <ul className="information">
            {
                task.map((curTask,index)=>{
                    return(
                        <li key={index}  className="list">
                            <span>{curTask}</span>
                          </li>
                    )
                })
            }
        </ul>
        </section>
        <button className="clear" onClick={handleClear}>Clear All</button>
    
        </>
    )
}