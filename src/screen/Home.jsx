import React from 'react'
import './style/home.css'
import Female from '../images/female.png'
import Developer from '../images/tech.png'
// import Male from '../images/man.png'
import Devs from '../images/max.png'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import ScrollButton from '../Components/scrollButton'
const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='hero'>
        <div className='hero-content'>
          <h4>Best E-Learning Platform</h4>
          <h1>getting best quality education is now more easier</h1>
          <p>
            Start, switch, or advance your career with more than 5,800 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className='males'>
            <img src={Devs} alt='devs' />
          </div>
          <div className='buttons'>{/* <button>View Schools</button> */}</div>
        </div>
        <div className='hero-images'>
          <img src={Female} alt='female' />
        </div>
      </div>
      {/* <Scrolling/> */}
      <div className='product'>
        <div className='product-grid'>
          <div className='grid-box'>
            <h2>School of Product</h2>
            <p>
              The School of Product provides comprehensive training programs
              that integrate various disciplines such as art, design, design
              thinking, and business. These courses encompass the key elements
              of the complete product lifecycle, including generating ideas,
              constructing, overseeing, marketing, and delivering.
            </p>
            <Link to='#'>
              <button>Apply Now</button>
            </Link>
          </div>

          <div className='grid-box'>
            <h2>School of Data</h2>
            <p>
              The School of Product provides comprehensive training programs
              that integrate various disciplines such as art, design, design
              thinking, and business. These courses encompass the key elements
              of the complete product lifecycle, including generating ideas,
              constructing, overseeing, marketing, and delivering.
            </p>
            <Link to='#'>
              <button>Apply Now</button>
            </Link>
          </div>

          <div className='grid-box'>
            <h2>School of Software</h2>
            <p>
              The School of Product provides comprehensive training programs
              that integrate various disciplines such as art, design, design
              thinking, and business. These courses encompass the key elements
              of the complete product lifecycle, including generating ideas,
              constructing, overseeing, marketing, and delivering.
            </p>
            <Link to='#'>
              <button>Apply Now</button>
            </Link>
          </div>

          <div className='grid-box'>
            <h2>School of Product</h2>
            <p>
              The School of Product provides comprehensive training programs
              that integrate various disciplines such as art, design, design
              thinking, and business. These courses encompass the key elements
              of the complete product lifecycle, including generating ideas,
              constructing, overseeing, marketing, and delivering.
            </p>
            <Link to='#'>
              <button>Apply Now</button>
            </Link>
          </div>

          <div className='grid-box'>
            <h2>School of Product</h2>
            <p>
              The School of Product provides comprehensive training programs
              that integrate various disciplines such as art, design, design
              thinking, and business. These courses encompass the key elements
              of the complete product lifecycle, including generating ideas,
              constructing, overseeing, marketing, and delivering.
            </p>
            <Link to='#'>
              <button>Apply Now</button>
            </Link>
          </div>
          <div className='grid-box'>
            <h2>School of Product</h2>
            <p>
              The School of Product provides comprehensive training programs
              that integrate various disciplines such as art, design, design
              thinking, and business. These courses encompass the key elements
              of the complete product lifecycle, including generating ideas,
              constructing, overseeing, marketing, and delivering.
            </p>
            <Link to='#'>
              <button>Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='company'>
        <div className='company-images'>
          <img src={Developer} alt='group of dev' />
        </div>
        <div className='text'>
          <h2>Prepare your company for the future</h2>
          <p>
            Our extensive Diploma program is set to produce top tech talents who
            are able to compete globally. Hiring our graduates guarantee that
            you have access to highly skilled, passionate and professional tech
            talent to ensure continuous business success.
          </p>
          <Link to='#'>
            <button>Hire our Grads</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
