import {  NavLink } from "react-router-dom"

export const Home = ({theme}) =>{
    
    return (
    <>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/> */}
    <div className="Home">
    <h1 className="Home-head">Empowering Students to Succeed</h1>
    <br/>
    <h3 className="Home-head-2">Access high-quality educational videos for BCA.</h3>
    <br/>
    <NavLink to="/categories" className="Home-link">
    <div className="Home-link-div">
    Click Here To Start Learning
    </div>
    </NavLink>
    </div>
    <div className="Home-Intro">
        <h1 >Featured Courses</h1>
        <h3 >BCA Introduction</h3>
        <p >Learn the fundamentals of BCA.</p>
        <br/>
        <br/>
        <h3 >Coding Basics</h3>
        <p >Understand the basics of coding.</p>
        <br/>
        <br/>
        <h3 >Unlock Your Tech Potential</h3>
        <p >Master programming skills with engaging tutorials and practical insights-your journey to innovation starts here.</p>
    </div>
    </>
    )
}