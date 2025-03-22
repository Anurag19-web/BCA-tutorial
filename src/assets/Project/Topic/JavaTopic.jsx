import { NavLink, useNavigate } from "react-router-dom"

export const JavaTopic = () =>{
    const navigate = useNavigate();

    const handleClick = (page) =>{
        navigate('/videos',{state:{page}})
    }
    
    return (
        <>
        <div className="Chapter-head-div">
            <h1 className="Chapter-head">JAVA HAVE ONE SHOT VIDEO</h1>
            <p className="Chapter-para" >Click to start studying</p>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">JAVA ONE SHOT</h1>
            <p className="Chapter-div-para">Learn the basics and advance of Java.</p>
            
            {/* <NavLink to="/videos" className="Chapter-div-bt"   >start Learning</NavLink> */}
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(9)}>
            <div className="Chapter-div-btn-div" >start Learning
            </div>
            </button>
        </div>
        </>
    )
}