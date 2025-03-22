import { NavLink } from "react-router-dom"
export const SemOneSubject = () =>{
    return (
        <>
        <div className="Subject-head-div">
        <h1 className="Subject-head">Select a Subject</h1>
        <p className="Subject-para">Choose from a variety of Semester to focus on for your exams.</p>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head">HTML</h1>
            <p className="Subject-div-para">Explore videos on HTML.</p>
            <NavLink to="/html/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head">CSS</h1>
            <p className="Subject-div-para">Explore videos on CSS.</p>
            <NavLink to="/css/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head">CODE</h1>
            <p className="Subject-div-para">Explore videos on CODE.</p>
            <NavLink to="/code/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        </>
    )
}