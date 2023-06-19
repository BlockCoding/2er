import React from 'react'
import './style/home.css'
import Female from '../images/female.png'
import Navbar from '../Components/Navbar'
import Scrolling from '../Components/scrolling'
const Home = () => {
  return <div>
    <Navbar/>
    <div className='hero'>
      <div className='hero-content'>
        <h4>Best E-Learning Platform</h4>
        <h1>getting best quality education is now more easier</h1>
        <p>Start, switch, or advance your career with more than 5,800 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
      <div className='buttons'>
      <button>Join Class</button>
      </div>
      </div>
      <div className='hero-images'>
        <img src={Female} alt='female'/>
      </div>
    </div>
<Scrolling/>
<div className='product'>
  <div className='product-grid'>
    <div className='grid-box'>
      <h2>School of Product</h2>
      <p>The School of Product provides comprehensive training programs that integrate various disciplines such as art, design, design thinking, and business. These courses encompass the key elements of the complete product lifecycle, including generating ideas, constructing, overseeing, marketing, and delivering.</p>
    <button>
      Apply Now
    </button>
    </div>

    <div className='grid-box'>
      <h2>School of Data</h2>
      <p>The School of Product provides comprehensive training programs that integrate various disciplines such as art, design, design thinking, and business. These courses encompass the key elements of the complete product lifecycle, including generating ideas, constructing, overseeing, marketing, and delivering.</p>
      <button>
      Apply Now
    </button>
    </div>

    <div className='grid-box'>
      <h2>School of Software</h2>
      <p>The School of Product provides comprehensive training programs that integrate various disciplines such as art, design, design thinking, and business. These courses encompass the key elements of the complete product lifecycle, including generating ideas, constructing, overseeing, marketing, and delivering.</p>
    <button>
      Apply Now
    </button>
    </div>

    <div className='grid-box'>
      <h2>School of Product</h2>
      <p>The School of Product provides comprehensive training programs that integrate various disciplines such as art, design, design thinking, and business. These courses encompass the key elements of the complete product lifecycle, including generating ideas, constructing, overseeing, marketing, and delivering.</p>
    <button>
      Apply Now
    </button>
    </div>

    <div className='grid-box'>
      <h2>School of Product</h2>
      <p>The School of Product provides comprehensive training programs that integrate various disciplines such as art, design, design thinking, and business. These courses encompass the key elements of the complete product lifecycle, including generating ideas, constructing, overseeing, marketing, and delivering.</p>
     <button>
      Apply Now
    </button>
    </div>
    <div className='grid-box'>
      <h2>School of Product</h2>
      <p>The School of Product provides comprehensive training programs that integrate various disciplines such as art, design, design thinking, and business. These courses encompass the key elements of the complete product lifecycle, including generating ideas, constructing, overseeing, marketing, and delivering.</p>
    <button>
      Apply Now
    </button>
    </div>
  </div>
</div>
<div className='company'>
  
</div>
  </div>
}
export default Home
