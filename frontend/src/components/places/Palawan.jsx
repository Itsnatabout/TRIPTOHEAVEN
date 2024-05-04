import React from "react"
import Viewer from "../PlaceViewLayout"

// Import images
import Header from "/img/palawan.jpg"
import explore1 from "/img/palawan1.jpg"
import explore2 from "/img/palawan2.jpg"
import explore3 from "/img/palawan3.jpg"
import explore4 from "/img/palawan4.jpg"
import explore5 from "/img/palawan5.jpg"
import explore6 from "/img/palawan6.jpg"

const Palawan = () => {

 // Define an array of place details
 const Details = {
    backgroundImage: Header,
    Title: "El Nido",
    description:
      "El Nido, located in the province of Palawan in the Philippines, is a breathtaking destination renowned for its stunning limestone cliffs, crystal-clear turquoise waters, and pristine white sandy beaches. It's a tropical paradise boasting numerous hidden lagoons, secret beaches, and vibrant coral reefs teeming with marine life, making it a haven for snorkelers and divers alike. Beyond its natural beauty, El Nido also offers various activities such as island hopping tours, kayaking through mangrove forests, and hiking to panoramic viewpoints. The town itself exudes a laid-back charm with its rustic vibe, friendly locals, and delicious seafood cuisine. Whether you seek relaxation, adventure, or simply awe-inspiring scenery, El Nido promises an unforgettable experience in paradise.",
    images: [explore1, explore2, explore3, explore4, explore5, explore6]
  }


  return (
    <>
    <Viewer props={Details} />
    </>
  )
}

export default Palawan
