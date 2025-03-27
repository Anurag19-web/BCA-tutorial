import { NavLink, useNavigate } from "react-router-dom"

export const HtmlTopic = () =>{
    const navigate = useNavigate();
    // const test = () =>{
    //     navigate("/videos", {state :
    //         {
    //         "id":1,
    //         "name":"HTML",
    //         "URL":"https://youtu.be/HcOc7P5BMi4?feature=shared"
    //     },})
    // }

    const handleClick = (page) =>{
        navigate('/videos',{state:{page}})
    }
    
    return (
        <>
        <div className="Chapter-head-div">
            <h1 className="Chapter-head" >HTML VIDEO</h1>
            {/* <p className="Chapter-para" >Click to start studying</p> */}
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head" >HTML ONE SHOT</h1>
            <p className="Chapter-div-para" >Learn the basics  of Html.</p>
            
            {/* <NavLink to="/videos" className="Chapter-div-bt">start Learning</NavLink> */}
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(1)}>
            <div className="Chapter-div-btn-div" >start Learning
                </div>
            </button>
        </div>
        </>
    )
}