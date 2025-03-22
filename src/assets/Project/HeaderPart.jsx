import { NavLink } from "react-router-dom"

export const Header = () =>{
    return (
        <>
        <div className="Header">
        <h1 className="Header-head">Future Wise</h1>
        <NavLink to="/" className="Header-home">Home</NavLink>
        <br/>
        <NavLink to="/categories" className="Header-categories" >Categories</NavLink>
        <br/>
        <NavLink to="/signup" className="Header-account" >Account</NavLink>
        </div>
        </>
    )
}