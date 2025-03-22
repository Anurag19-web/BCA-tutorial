import { NavLink } from "react-router-dom"

export const Footer = () =>{
    return (
        <>
        <div className="Footer">
        <NavLink to="" className="Footer-about" >About Us</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="" className="Footer-help" >Help</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to="" className="Footer-contact" >Contact</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        </>
    )
}