import React from 'react'
import '../Components/scrolling.css'
import coursera from '../images/Coursera.png'
// import datacamp from '../images/DataCamp.png'
// import skillshare from '../images/skillshare.png'

const scrolling = () => {
  return (
    <div>
      <div className='moving'>
        <div className='scrolling-container'>
          <img src={coursera} alt='coursera' />
          <img src={coursera} alt='coursera' />
          <img src={coursera} alt='coursera' />
          <img src={coursera} alt='coursera' />
          <img src={coursera} alt='coursera' />
          {/* <img src={datacamp} alt='datacamp' /> */}
          {/* <img src={datacamp} alt='datacamp' /> */}
          {/* <img src={datacamp} alt='datacamp' />
          <img src={datacamp} alt='datacamp' /> */}
          {/* <img src={skillshare} alt='skillshare' /> */}
          {/* <img src={skillshare} alt='skillshare' />
          <img src={skillshare} alt='skillshare' /> */}
        </div>
      </div>
    </div>
  )
}

export default scrolling
