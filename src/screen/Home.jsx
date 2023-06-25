import React from 'react'
import './style/home.css'
import Female from '../images/female.png'
import Developer from '../images/tech.png'
import Form from '../Components/form'
// import Male from '../images/man.png'
import Devs from '../images/max.png'
import Footer from '../Components/footer'
import Navbar from '../Components/Navbar'
import Star from '../images/star.png'
import Coursera from '../images/coursera-svg.png'
import Certificate from '../images/certificate.png'
import Illustrations from '../images/images.png'
import { Link } from 'react-router-dom'
import Api from '../images/api.png'
import ScrollButton from '../Components/scrollButton'
const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='hero-sections'>
        <div className='hero-content'>
          <h2>Getting Best Quality Education is Now More Easier</h2>
          <p>
            Unlock the world of coding with our comprehensive programming
            language learning platform.
          </p>

          <div className='trusted'>
            <h5>Trusted by 100+ user</h5>
            <div className='star-flex'>
              <img src={Star} alt='star' />
              <img src={Star} alt='star' />
              <img src={Star} alt='star' />
              <img src={Star} alt='star' />
              <img src={Star} alt='star' />
            </div>
          </div>

          <Form/>
        </div>
        <div className='hero-images'>
          <img src={Illustrations} alt='image' />
        </div>
      </div>
      <div className='grid'>
        <div className='grid-box'>
          <h2>School of Product</h2>
          <p>
            The School of Product provides comprehensive training programs that
            integrate various disciplines such as art, design, design thinking,
            and business. These courses encompass the key elements of the
            complete product lifecycle, including generating ideas,
            constructing, overseeing, marketing, and delivering.
          </p>
          <button>Apply Now</button>
        </div>
        <div className='grid-box'>
          <h2>School of Data</h2>
          <p>
            The School of Product provides comprehensive training programs that
            integrate various disciplines such as art, design, design thinking,
            and business. These courses encompass the key elements of the
            complete product lifecycle, including generating ideas,
            constructing, overseeing, marketing, and delivering.
          </p>
          <button>Apply Now</button>
        </div>
        <div className='grid-box'>
          <h2>School of Software</h2>
          <p>
            The School of Product provides comprehensive training programs that
            integrate various disciplines such as art, design, design thinking,
            and business. These courses encompass the key elements of the
            complete product lifecycle, including generating ideas,
            constructing, overseeing, marketing, and delivering.
          </p>
          <button>Apply Now</button>
        </div>
      </div>
      <div className='grid-red'>
        <h2>What is Ailion Africa?</h2>
        <p>
          Learn the data and AI skills you need online at your own pace—from
          non-coding essentials to data science, AI, and machine learning.
        </p>
        <button>Start Learning for Free</button>
      </div>
      <div className='secure'>
          <div className='secure-image'>
          <img src={Certificate} alt='Certificates' id='certificate'/>
          </div>
          <div className='secure-content'>
            <b>
            certification
            </b>
            <h2>
            Secure your dream job in Product Design and Software Development.
            </h2>
            <p>
            Get certified in product design, software development, web development, data sciences, and receive personalized resume reviews and interview prep—all in one place.
            </p>
            <button>
              Learn More
            </button>
          </div> 
      </div>
      <div className='secure'>
          <div className='secure-content'>
            <b>
          API
            </b>
            <h2>
            Secure your dream job in Product Design and Software Development.
            </h2>
            <p>
            Get certified in product design, software development, web development, data sciences, and receive personalized resume reviews and interview prep—all in one place.
            </p>
            <button>
              Learn More
            </button>
          </div> 
          <div className='secure-image'>
          <img src={Api} alt='Certificates' id='API'/>
          </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
