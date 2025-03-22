import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Signup = () =>{
    const [form,setForm] = useState({
        username:"",
        email:"",
        password:"",
    })
 
    const handleFrom=(e)=>{
        const {name,value}=e.target;
        setForm((prev)=>({...prev,[name]:value}))
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("formData", JSON.stringify(form))
        console.log(form)
    }

    useEffect(()=>{
        const storedData = localStorage.getItem("formData");
        if(storedData){
            setForm(JSON.parse(storedData))
        }
       
    },[])

    return (<>
    <div className="form-div">
    <h1 className="account-header">Sign Up</h1>
    <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Username" className="account-input" name="username" value={form.username} onChange={handleFrom}/>
        <input type="email" placeholder="Email" className="account-input" name="email" value={form.email} onChange={handleFrom}/>
        <input type="password" placeholder="Password" className="account-input" name="password" value={form.password} onChange={handleFrom}/>
        <br/>
        <button type="submit" className="account-submitBtn">Sign Up</button>
        <NavLink to="/">
        <div className="account-home-btn">Home</div>
        <div className="signup-info-div">
        <p className="signup-info">Already have an account?</p><NavLink to="/login" className="signup-btn">Login</NavLink>
        </div>
        </NavLink>
    </form>
    </div>
    </>
    )
}