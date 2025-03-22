import { NavLink, useNavigate } from "react-router-dom"

export const DbmsTopic = () =>{
    const navigate = useNavigate();

    const handleClick = (page) =>{
        navigate('/videos',{state:{page}})
    }
    
    return (
        <>
        <div className="Chapter-head-div">
            <h1 className="Chapter-head">DBMS HAVE ONE SHOT VIDEO</h1>
            <p className="Chapter-para" >Click to start studying</p>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">DBMS HAVE ONE SHOT VIDEO</h1>
            <p className="Chapter-div-para">Learn the basics and advance of DBMS.</p>
            
            {/* <NavLink to="/videos" className="Chapter-div-bt">start Learning</NavLink> */}
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(6)}>
            <div className="Chapter-div-btn-div" >start Learning
                </div>
            </button>
        </div>
        </>
    )
}