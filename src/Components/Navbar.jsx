import React from "react";
import '../Components/Navbar.css'
// import { Link } from "react-router-dom";
// import { Fa } from "react-icons/fa";
const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <div className="navbar-logo">
                    {/* <Link to="/" className="company-logo"> */}
                    <img src="images/Logo.png" alt="Company Logo"/>
                    {/* </Link> */}
                </div>
                    <ul className="navbar-links">
                        <li>School</li>
                        <li>School</li>
                        <li>School</li>
                        <li>School</li>
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