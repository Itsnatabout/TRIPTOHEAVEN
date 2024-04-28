import React from "react"
import Viewer from "../PlaceViewLayout"

// Import images
import Header from "/img/cebu.jpg"
import explore1 from "/img/explore-1.jpg"
import explore2 from "/img/explore-2.jpg"
import explore3 from "/img/explore-3.jpg"
import explore4 from "/img/explore-4.jpg"
import explore5 from "/img/explore-5.jpg"
import explore6 from "/img/explore-6.jpg"
import explore7 from "/img/explore-7.jpg"
import explore8 from "/img/explore-8.jpg"

const Cebu = () => {
  // Define an array of place details
  const Details = {
    backgroundImage: Header,
    Title: "Cebu",
    description:
      "Cebu, a province in the Philippines, is renowned for its stunningbeaches, vibrant culture, and rich history. From the historiclandmarks like Magellan's Cross and Fort San Pedro to the pristineshores of Mactan and Malapascua islands, Cebu offers a diverserange of attractions for travelers. Whether you're diving into itscrystal-clear waters, exploring its bustling cities, or immersingyourself in its colorful festivals, Cebu promises an unforgettable experience blending natural beauty with cultural richness.",
    images: [explore1, explore2, explore3, explore4, explore5, explore6, explore7, explore8]
  }
  return (
    <div>
      <Viewer props={Details} />
    </div>
  )
}

export default Cebu
