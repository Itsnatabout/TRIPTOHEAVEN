import React from "react"
import Viewer from "../PlaceViewLayout"

// Import images
import Header from "/img/siargao.jpg"
import explore1 from "/img/siargao1.jpg"
import explore2 from "/img/siargao2.jpg"
import explore3 from "/img/siargao3.jpg"
import explore4 from "/img/siargao4.jpg"
import explore5 from "/img/siargao5.jpg"




const Siargao = () => {


 // Define an array of place details
 const Details = {
    backgroundImage: Header,
    Title: "Siargao",
    description:
      "Siargao is a captivating island nestled in the Philippine Sea, renowned for its world-class surfing waves, pristine beaches, and vibrant island culture. Surf enthusiasts flock to Cloud 9, a legendary surf spot known for its powerful barrels and thrilling rides. Beyond surfing, Siargao offers a diverse range of activities, from island hopping to exploring the enchanting Sugba Lagoon and the picturesque Magpupungko Rock Pools. The island's laid-back atmosphere and friendly locals create a welcoming vibe, inviting travelers to immerse themselves in its natural beauty and relaxed lifestyle. With its breathtaking sunsets, lush landscapes, and endless opportunities for adventure, Siargao captivates the hearts of all who visit.",
    images: [explore1, explore2, explore3, explore4, explore5]
  }

  return (
    <>
      <Viewer props={Details} />
    </>
  )
}

export default Siargao
