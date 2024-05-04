import React from "react"
import Viewer from "../PlaceViewLayout"

// Import images
import Header from "/img/boracay.jpg"
import explore1 from "/img/boracay1.jpg"
import explore2 from "/img/boracay2.jpg"
import explore3 from "/img/boracay3.jpg"
import explore4 from "/img/boracay4.jpg"


const Boracay = () => {
  // Define an array of place details
  const Details = {
    backgroundImage: Header,
    Title: "Boracay",
    description:
      "Boracay, located in the Philippines, is a tropical paradise renowned for its powdery white sand beaches, crystal-clear turquoise waters, and vibrant nightlife. It's a popular destination for beach lovers and water sports enthusiasts alike, offering activities such as snorkeling, diving, kiteboarding, and sailing. Beyond its natural beauty, Boracay also boasts a lively atmosphere with beachfront restaurants, bars, and shops lining the shores. With its stunning sunsets and lively ambiance, Boracay is a must-visit destination for travelers seeking relaxation, adventure, and unforgettable experiences in the Philippines.",
    images: [explore1, explore2, explore3, explore4]
  }
  return (
    <>
      <Viewer props={Details} />
    </>
  )
}

export default Boracay
