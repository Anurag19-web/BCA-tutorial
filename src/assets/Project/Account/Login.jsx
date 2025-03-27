import { useState } from "react"
import { NavLink } from "react-router-dom";

export const Login = () =>{

    const [loginForm, setLoginForm] = useState({
        email:"",
        password:"",
    })

    const handleLogin = (e) =>{
        const {name,value} = e.target;
        setLoginForm((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleFormSubmit= (e)=>{
        e.preventDefault();
    }
    return(
    <>
    <div className="form-login">
    <h1 className="login-head">Login</h1>
    <form className="login-form" onSubmit={handleFormSubmit}>
    <input type="email" name="email" className="login-email" value={loginForm.email} onChange={handleLogin} placeholder="Email"/>
    <br/>
    <br/>
    <input type="password" name="password" className="login-password" value={loginForm.password} onChange={handleLogin} placeholder="Password"/>
    <br/>
    <button className="login-submit-btn">Login</button>
    <NavLink to="/">
        <div className="login-home-btn">Home</div>
        <div className="login-info-div">
        <p className="login-info">Don't have an account?</p><NavLink to="/signup" className="login-btn">Sign Up</NavLink>
        </div>
        </NavLink>
    </form>
    </div>
    </>
    )
}