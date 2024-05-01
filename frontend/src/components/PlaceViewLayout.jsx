import React from "react";
import "../styles/PlaceViewLayout.css";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
const PlaceViewLayout = ({props}) => {
  

  return (
    <>
    <div className="container-fluid px-0">
      <div className="background-overlay" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
        <Link to="/packages">
        <button className="btn btn-link  position-absolute top-0 start-0 mt-3 ms-4" style={{ color: "#ffa500", textDecoration: "none", fontSize:"1.2rem"}}>
      <FaArrowLeft className="mb-1"/> Back
      </button>
        </Link>
      
        <div className="text-container mt-5">
          <div className="mb-3">
            <h1>{props.Title}</h1>
          </div>
          <div className="">
            <p>
              {props.description}
            </p>
          </div>
        </div>
      </div>
     
      <div className="container-fluid mt-3 px-5">
  <div className="d-flex flex-wrap">
    {/* Large image */}
    <div className="flex-fill" style={{ width: '60%', maxWidth: '60%', height: '400px', overflow: 'hidden' }}>
      <img src={props.images[0]} alt="Large" className="img-fluid" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
    </div>
    {/* Medium image */}
    <div className="flex-fill" style={{ width: '40%', maxWidth: '40%', height: '400px', overflow: 'hidden' }}>
      <img src={props.images[1]} alt="Medium" className="img-fluid" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
    </div>
    {/* Small images */}
    {props.images.slice(2).map((image, index) => (
      <div key={index} className="flex-fill" style={{ width: `${100 / props.images.length}%`, height: '300px', overflow: 'hidden' }}>
        <img src={image} alt={`Image ${index}`} className="img-fluid" style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
      </div>
    ))}
  </div>
</div>

      

    </div>
    </>
   
  );
};


export default PlaceViewLayout;
