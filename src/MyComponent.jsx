import { memo } from "react"

function MyComponenet({todos, addTodo}){


    console.log("child render");

    return (
        <>
        <h2>My Todos</h2>
           {todos.map((todo,index)=>{
               return <p key={index}>{todo}</p>
           })}
           <button onClick={addTodo}>Add todo</button>
        </>
    )
    
}
export default memo (MyComponenet)