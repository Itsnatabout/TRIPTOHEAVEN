import React from 'react'
import Header from './Header'
import Book from './Book'
import Packages from './Packages'
import { Link, useNavigate } from "react-router-dom"

const home = () => {
  return (
   <>
    <Header/>
    <section className="home" id="home">
        <div className="content">
            <h3>Providing you with the best and safest travel experience!</h3>
          <p>Discover new Places with us!</p>
          <Link to="/book">
            <a href="#" className="bookbtn" id="bookNowBtn">Book Now</a>
          </Link>       
        </div>

        <div className="video-container">
            <video src="./img/vid-1.mp4" id="video-slider" loop autoPlay muted ></video>
        </div>

      </section>
      <Packages/>
   </>
// <!-- landing page -->
    
    
  )
}

export default home
