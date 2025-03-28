import { NavLink } from "react-router-dom"

export const Help = () =>{
    return(
        <>
        <div className="Help-Main-div">
        <h1 className="help-head">Help</h1>
        <h3 className="help-assitant">Need Assistance or Have a Suggestion?</h3>
        <p className="help-para1">If you're experiencing any issues while using the platform or have suggestions that could help us improve, we’d love to hear from you! Our goal is to provide the best possible learning experience, and your feedback is essential in helping us achieve that.</p>
        <h2 className="help-common-head">Common Issues:</h2>
        <li type="radio" className="help-common-list">Videos not loading properly?</li>
        <li type="radio" className="help-common-list">Facing difficulties with navigation?</li>
        <li type="radio" className="help-common-list">Problems with accessing content on mobile devices?</li>
        <p className="help-para1">If you encounter any of these issues or other technical difficulties, please reach out to us through the <NavLink to="/contact">Contact Us</NavLink> page. You can share your concerns, and we’ll get back to you as soon as possible.</p>
        <h4 className="help-improve">Want to help us improve?</h4>
        <p className="help-para1">We’re always looking for ways to make the platform better. Feel free to send your suggestions and ideas on how we can enhance the learning experience.</p>
        <p className="help-para1">Visit our page and let us know!</p>
        </div>
        </>
    )
}