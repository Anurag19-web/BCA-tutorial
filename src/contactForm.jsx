import { useState } from "react"


export const ContactForm = () =>{

    // const [user,setUser] = useState({
    //     userName:"",
    //     password:"",
    // })

    // function handleUser(e){
    // const {name,value}=e.target;
    // setUser((prev)=>({...prev,[name]:value}))
   
    // }

    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    function handleSubmit(e){
      e.preventDefault();
      const userData={
        username,
        password,
      }
      console.log(userData)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input type="text" name="username" value={username} onChange={(e)=>setUserName(e.target.value)} className="input"/>
        <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input"/>
        <button type="submit" className="clear">Click Here</button>
        </form>
        </>
    )
}