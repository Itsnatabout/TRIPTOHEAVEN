import React from "react"
import Card from "./Card"
import Header from "./Header"


const Packages = () => {
    return (
      <div>
        <Header/>
        <h1 className="text-center my-5 fw-bold greatDeals">Packages</h1>
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
          <Card
            imageUrl="./img/siargao.jpg"
            title="Siargao"
            description=" Known as the surfing capital of the Philippines, Siargao also boasts pristine beaches, lush mangrove forests, and vibrant coral reefs, making it a paradise for nature lovers and adventure seekers."
            price="6000"
          />
          <Card
            imageUrl="./img/bohol.jpg"
            title="Bohol"
            description="Home to the iconic Chocolate Hills and the adorable tarsiers, Bohol offers a mix of natural wonders and cultural heritage sites, including historic churches and Spanish-era watchtowers."
            price="9000"
          />
          <Card
            imageUrl="./img/Albay.jpg"
            title="Albay"
            description="Best known for the perfectly cone-shaped Mayon Volcano, Albay offers stunning landscapes, adrenaline-pumping activities like ATV adventures, and a rich culinary scene featuring spicy Bicolano cuisine."
            price="8000"
          />
        </div>
      </div>
      
  )
}

export default Packages
