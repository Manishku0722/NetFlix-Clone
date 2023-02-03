import { Link, NavLink, Outlet } from "react-router-dom";

function Contact() {
    return (
        <>
            <h1>Contact us for any business</h1>
            <ul>
                <li><NavLink className="nav-bar-class" to="company">Company</NavLink></li>
                <li><NavLink className="nav-bar-class" to="channel">Channel</NavLink></li>
                <li><NavLink className="nav-bar-class" to="other">Other</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}

export default Contact;