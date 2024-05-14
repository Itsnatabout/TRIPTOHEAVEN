import React from "react"
import Viewer from "../PlaceViewLayout"

// Import images
import Header from "/img/cebu.jpg"
import explore1 from "/img/cebu1.jpg"
import explore2 from "/img/cebu2.jpg"
import explore3 from "/img/cebu3.jpg"
import explore4 from "/img/cebu4.jpg"


const Cebu = () => {
  // Define an array of place details
  const Details = {
    backgroundImage: Header,
    Title: "Cebu",
    description:
      "Cebu, a province in the Philippines, is renowned for its stunningbeaches, vibrant culture, and rich history. From the historiclandmarks like Magellan's Cross and Fort San Pedro to the pristineshores of Mactan and Malapascua islands, Cebu offers a diverserange of attractions for travelers. Whether you're diving into itscrystal-clear waters, exploring its bustling cities, or immersingyourself in its colorful festivals, Cebu promises an unforgettable experience blending natural beauty with cultural richness.",
    images: [explore1, explore2, explore3, explore4]
  }
  return (
    <>
      <Viewer props={Details} />
    </>
  )
}

export default Cebu
