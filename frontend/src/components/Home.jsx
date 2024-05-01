import React from 'react'
import Header from './Header'
import Book from './Book'
import Packages from './Packages'
import Card from "./Card"
import { Link, useNavigate } from "react-router-dom"

const home = () => {
  return (
   <>
    <Header/>
    <section className="home" id="home">
        
        <div className="video-container">
      
          <video src="./img/vid-1.mp4" id="video-slider" loop autoPlay muted></video>
          <div className="content">
            <h3>Providing you with the best and safest travel experience!</h3>
          <p>Discover new Places with us!</p>
          <Link to="/booking">
            <a href="#" className="bookbtn" id="bookNowBtn">Book Now</a>
          </Link>       
        </div>
        </div>
      </section>
      <div>
          <h1 className="text-center my-5 fw-bold greatDeals">Great Deals!</h1>
        <div className="d-flex flex-wrap justify-content-evenly mt-5">
          <Card
            imageUrl="./img/cebu.jpg"
            title="Cebu"
            description="Known for its stunning beaches and diving spots, Cebu offers a mix of cultural and natural attractions, from historical sites like Magellan's Cross to the vibrant nightlife of Cebu City. "
            price="5000"
          />
          <Card
            imageUrl="./img/boracay.jpg"
            title="Boracay"
            description="Famous for its powdery white sand beaches and vibrant nightlife, Boracay is a top destination for water sports enthusiasts and sun-seekers alike."
            price="8000"
          />
          <Card
            imageUrl="./img/palawan.jpg"
            title="El Nido, Palawan"
            description="Renowned for its breathtaking limestone cliffs, crystal-clear waters, and hidden lagoons, El Nido offers unparalleled beauty and tranquility. "
            price="9500"
        />
        </div>
      </div>
    
      
   </>
// <!-- landing page -->
    
    
  )
}

export default home
