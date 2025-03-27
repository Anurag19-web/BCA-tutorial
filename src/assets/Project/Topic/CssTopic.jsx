import { NavLink, useNavigate } from "react-router-dom"

export const CssTopic = () =>{
    const navigate = useNavigate();
    const handleClick = (page) =>{
        navigate('/videos',{state:{page}})
    }

    return (
        <>
        <div className="Chapter-head-div">
            <h1 className="Chapter-head" >CSS VIDEOS</h1>
            {/* <p className="Chapter-para">Click to start studying</p> */}
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">CSS ONE SHOT</h1>
            <p className="Chapter-div-para" >Learn the basics  of CSS.</p>
            {/* <NavLink to="/videos" className="Chapter-div-btn" onClick={()=>handleClick(2)}>start Learning</NavLink> */}
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(2)}>
            <div className="Chapter-div-btn-div" >start Learning</div>
            </button>
        </div>
        </>
    )
}