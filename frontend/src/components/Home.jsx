import React from 'react'

const home = () => {
  return (
   
// <!-- landing page -->
    <section className="home" id="home">
        <div className="content">
            <h3>Providing you with the best and safest travel experience!</h3>
            <p>Discover new Places with us!</p>
            <a href="#" className="btn" id="bookNowBtn">Book Now</a>
        </div>


        <div className="video-container">
            <video src="./img/vid-1.mp4" id="video-slider" loop autoPlay muted ></video>
        </div>

    </section>
  )
}

export default home
