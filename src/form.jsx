import { useState } from "react"

export const Form = () =>{

    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:"",
    })

    function handleUser(e){
        const {name, value} = e.target;
        setUser((prev)=>({...prev,[name]:value}))
    }

    function handleSubmit(e){
     e.preventDefault();
     console.log(user)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <h1 className="head">Sign Up Form</h1>
        <p className="information">firstName:{user.firstName}<br/>
        lastName:{user.lastName}<br/>
        Email:{user.email}<br/>
        Password:{user.password}<br/>
        PhonNumber:{user.phoneNumber}<br/><br/><br/><br/>
        </p>
        <h3 className="date-time">First Name</h3>
        <input type="text" className="input" name="firstName" value={user.firstName} onChange={handleUser}/>
        <h3 className="date-time">Last Name</h3>
        <input type="text" className="input" name="lastName" value={user.lastName} onChange={handleUser}/>
        <h3 className="date-time">Email</h3>
        <input type="email" className="input" name="email" value={user.email} onChange={handleUser}/>
        <h3 className="date-time">Password</h3>
        <input type="password" className="input" name="password" value={user.password} onChange={handleUser}/>
        <h3 className="date-time">Phone Number</h3>
        <input type="number" className="input" name="phoneNumber" value={user.phoneNumber} onChange={handleUser}/>
        <button type="submit" className="clear">Sign Up</button>
        </form>
        </>
    )
}