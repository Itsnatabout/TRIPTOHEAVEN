import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="card m-4" style={{ width: "25rem", height: "35rem" }}>
  <div className="position-relative" style={{ height: "18rem", overflow: "hidden" }}>
    <img
      src={imageUrl}
      className="card-img-top"
      alt="..."
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <Link to={`/packages/${title}`}>
           <div className="position-absolute top-0 start-0 w-100 h-100 overlay">
      <h2 className="card-title text-white m-0 p-3">{title}</h2>
    </div>
        </Link>
   
  </div>
  <div className="card-body d-flex flex-column justify-content-between">
    <div>
      <h5 className="card-title">
        <FaMapMarkerAlt style={{ marginBottom: "7px", color: "#ffa500" }} /> {title}
      </h5>
      <p className="card-text">{description}</p>
    </div>
    <div>
          <h4 className="card-title ms-1">{price} PHP</h4>
          <Link to="/booking">
          <a href="#" className="btn btn-primary mt-2" style={{ backgroundColor: "#ffa500", borderColor: "#ffa500" }}>
        Book Now
      </a>
          </Link>   
      
    </div>
  </div>
</div>

  )
}

export default Card
