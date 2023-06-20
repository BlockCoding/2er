import React from "react";
import '../Components/Navbar.css'
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
// import { Fa } from "react-icons/fa";
const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    {/* <Link to="/" className="company-logo"> */}
                    <img src={logo} alt="Company Logo"/>
                    {/* </Link> */}
                </div>
                    <ul className="navbar-links">
                        <Link to="#">School</Link>
                        <Link to="#">Course</Link>
                        <Link to="#">About Us</Link>
                        <Link to="#">Tuition</Link>
                        <Link to="#">FAQs</Link>
                        <Link to="/signIn">Login</Link>
                        <Link to="/signUp">Sign Up</Link>
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