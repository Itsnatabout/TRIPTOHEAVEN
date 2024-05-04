import React from 'react'
import Viewer from "../PlaceViewLayout"

// Import images
import Header from "/img/bohol.jpg"
import explore1 from "/img/bohol1.jpg"
import explore2 from "/img/bohol2.jpg"
import explore3 from "/img/bohol3.jpg"
import explore4 from "/img/bohol4.jpg"
import explore5 from "/img/bohol5.jpg"




const Bohol = () => {


 // Define an array of place details
 const Details = {
    backgroundImage: Header,
    Title: "Bohol",
    description:
      "Bohol, a province in the Philippines, is an enchanting destination known for its diverse natural attractions and rich cultural heritage. The iconic Chocolate Hills, a geological formation of over 1,000 grass-covered limestone hills, stand as one of its most famous landmarks. Another highlight is the adorable tarsiers, some of the world's smallest primates, found in conservation areas across the island.",
    images: [explore1, explore2, explore3, explore4, explore5]
  }


  return (
    <>
         <Viewer props={Details} />
    </>
  )
}

export default Bohol
