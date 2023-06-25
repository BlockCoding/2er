import React, { useState } from 'react'
import '../Components/Navbar.css'
import Logo from '../images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

import { NavLink, Link} from "react-router-dom";
// import { Fa } from "react-icons/fa";
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
      }
      return (
        
        <section className='parent-nav'>
         <div className="alert">
                <p>ENDS 6/26: 50% off Pro memberships</p>
                <b>USE CODE LEARN23JUNE</b>
            </div>
          <div className='navbar-container'>
            <div className='navbar'>
              <div className='navbar-logo'>
                <NavLink to='/home' className='company-logo'>
                  <img src={Logo} alt='CompanyLogo' />
                </NavLink>
              </div>
              <div className='hamburger' onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
              </div>
    
              <div className={`navbarLinks ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className='navbar-links'>
                 <li>
                  <NavLink to='/'>School</NavLink>
                 </li>
                  <li>
                    <NavLink to='/'>Course</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/privacy'>Tuition</NavLink>
                  </li>
                  <li>
                    <NavLink to='/'>FAQs</NavLink>
                  </li>
                  <li>
                    <NavLink to='/signIn'>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to='/signUp'>Sign Up</NavLink>
                  </li>
                  {/* <Dropdown/> */}
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Navbar;