import { NavLink, useNavigate } from "react-router-dom"

export const CodeTopic = () =>{
    const navigate = useNavigate();
    const handleClick = (page) =>{
        navigate('/videos',{state:{page}})
    }

    return (
        <>
        <div className="Chapter-head-div">
            <h1 className="Chapter-head">Select your Topic</h1>
            {/* <p className="Chapter-para">Select a Topic to start studying</p> */}
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">Logic Gates</h1>
            <p className="Chapter-div-para">Learn the Logic Gates.</p>
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(3.1)}>
            <div className="Chapter-div-btn-div">start Learning</div>
            </button>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">Bollean Algebra</h1>
            <p className="Chapter-div-para">Learn the Bollean Algebra.</p>
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(3.2)}>
            <div className="Chapter-div-btn-div">start Learning</div>
            </button>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">Number System</h1>
            <p className="Chapter-div-para">Learn the Number System.</p>
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(3.3)}>
            <div className="Chapter-div-btn-div">start Learning</div>
            </button>
        </div>
        <br/>
        <div className="Chapter-div">
            <h1 className="Chapter-div-head">Half and Full Adder</h1>
            <p className="Chapter-div-para">Learn the Half and Full Adder.</p>
            <button  className="Chapter-div-btn"  onClick={()=>handleClick(3.4)}>
            <div className="Chapter-div-btn-div">start Learning</div>
            </button>
        </div>
        </>
    )
}