import { NavLink } from "react-router-dom"

export const Categories = ({theme}) =>{
    return (
        <>
        <div className="Categories-main-div">
        <div className="Categories-head-div">
            <h1 className="Categories-head">Select Your Semester</h1>
            <p className="Categories-para">Choose from a variety of Semester to focus on for your exams.</p>
        </div>
        <br/>
        <div className="Categories-div">
            <h1 className="Categories-div-head" >Semester 1</h1>
            <p className="Categories-div-para">Explore videos on HTML, CSS, CODE & more. </p>
            <NavLink to="/Sem1/subject" className="Categories-div-btn" >
            <div className="Categories-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Categories-div">
            <h1 className="Categories-div-head">Semester 2</h1>
            <p className="Categories-div-para">Explore videos on JavaScript, C Language & more. </p>
            <NavLink to="/Sem2/subject" className="Categories-div-btn" >
            <div className="Categories-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        <br/>
        <div className="Categories-div">
            <h1 className="Categories-div-head">Semester 3</h1>
            <p className="Categories-div-para">Explore videos on C++, Java, Python & more. </p>
            <NavLink to="/Sem3/subject" className="Categories-div-btn" >
            <div className="Categories-div-btn-div">
            Explore
            </div>
            </NavLink>
        </div>
        </div>
        </>
    )
}