import { Link, NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
        <ul className="NavBar">
            <li><NavLink className="nav-bar-class" to="/about">About</NavLink></li>
            <li><NavLink className="nav-bar-class" to="/">Home</NavLink></li>
            {/* <li><NavLink className="nav-bar-class" to="/user/manish">Manish</NavLink></li>
            <li><NavLink className="nav-bar-class" to="/user/anil">Anil</NavLink></li> */}
            <li><NavLink className="nav-bar-class" to="/filter">Filter</NavLink></li>
            <li><NavLink className="nav-bar-class" to="/contact">Contact</NavLink></li>
            <li><NavLink className="nav-bar-class" to="/login">Login</NavLink></li>
        </ul>
        </div>
    )
}

export default NavBar;