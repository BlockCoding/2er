import React from "react";
import '../Components/Navbar.css'
import logo from '../images/logo.png'
import { NavLink, Link} from "react-router-dom";
// import { Fa } from "react-icons/fa";
const Navbar = () => {
    return(
        <div>
            <div className="alert">
                <p>ENDS 6/26: 50% off Pro memberships</p>
                <b>USE CODE LEARN23JUNE</b>
            </div>
            <div className="navbar">
                <div className="navbar-logo">
                    {/* <Link to="/" className="company-logo"> */}
                    <img src={logo} alt="Company Logo"/>
                    {/* </Link> */}
                </div>
                    <ul className="navbar-links">
                        <Link to="#">School</Link>
                        <NavLink to="#">Course</NavLink>
                        <NavLink to="#">About Us</NavLink>
                        <NavLink to="#">Tuition</NavLink>
                        <NavLink to="#">FAQs</NavLink>
                        <NavLink to="/signIn">Login</NavLink>
                        <NavLink to="/signUp">Sign Up</NavLink>
                       {/* <Link to="./about">About</Link>
                        <Link to="./privacy">Privacy</Link>
                        <Link to="./terms">Terms</Link>
                        <Link to="./faqs">FAQs</Link>
                        <Link to="./download">Download App</Link> */}
                      {/* <Dropdown/> */}
                    </ul>
            </div>
        </div>
    );
}

export default Navbar;