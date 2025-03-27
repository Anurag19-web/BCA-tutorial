import { NavLink } from "react-router-dom"

export const Footer = () =>{
    return (
        <>
        <div className="Footer">
        <NavLink to="/about" className="Footer-about" >About Us</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/help" className="Footer-help" >Help</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="/contact" className="Footer-contact" >Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </>
    )
}