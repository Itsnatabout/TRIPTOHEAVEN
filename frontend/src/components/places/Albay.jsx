import React from 'react'

import Viewer from "../PlaceViewLayout"

// Import images
import Header from "/img/Albay.jpg"
import explore1 from "/img/albay1.jpg"
import explore2 from "/img/albay2.jpg"
import explore3 from "/img/albay3.jpg"
import explore4 from "/img/albay4.jpg"


const Albay = () => {

 // Define an array of place details
 const Details = {
    backgroundImage: Header,
    Title: "Albay",
    description:
      "Albay, a province in the Philippines, is dominated by the iconic Mayon Volcano, known for its perfect cone shape. Beyond Mayon, Albay offers stunning beaches, lush forests, and scenic waterfalls for adventurers. The region's rich cultural heritage is evident in its centuries-old churches and spicy cuisine, making it a captivating destination for those seeking natural beauty and cultural immersion.",
    images: [explore1, explore2, explore3, explore4]
  }


  return (
    <>
         <Viewer props={Details} />
    </>
  )
}

export default Albay
