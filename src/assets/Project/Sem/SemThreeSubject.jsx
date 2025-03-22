import { NavLink } from "react-router-dom"
export const SemThreeSubject = () =>{
    return (
        <>
        <div className="Subject-head-div">
        <h1 className="Subject-head">Select a Subject</h1>
        <p className="Subject-para">Choose from a variety of Semester to focus on for your exams.</p>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head">C++</h1>
            <p className="Subject-div-para">Explore videos on C++.</p>
            <NavLink to="/c++/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head">JAVA</h1>
            <p className="Subject-div-para">Explore videos on Java.</p>
            <NavLink to="/java/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head">PYTHON</h1>
            <p className="Subject-div-para">Explore videos on Python.</p>
            <NavLink to="/python/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        </>
    )
}