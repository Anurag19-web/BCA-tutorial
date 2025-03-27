import { NavLink } from "react-router-dom"
export const SemTwoSubject = () =>{
    return (
        <>
        <div className="Subject-head-div">
        <h1 className="Subject-head">Select a Subject</h1>
        <p className="Subject-para">Choose from a variety of Semester to focus on for your exams.</p>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head">Basic JS</h1>
            <p className="Subject-div-para" >Explore videos on JavaScript.</p>
            <NavLink to="/javascript/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head" >Basic C</h1>
            <p className="Subject-div-para" >Explore videos on C Language.</p>
            <NavLink to="/c/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Subject-div">
            <h1 className="Subject-div-head" >DBMS</h1>
            <p className="Subject-div-para">Explore videos on DBMS.</p>
            <NavLink to="/dbms/topic" className="Subject-div-btn">
            <div className="Subject-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        </>
    )
}