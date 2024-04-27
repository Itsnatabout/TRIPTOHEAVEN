import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"

const Card = ({ imageUrl, title, description, price }) => {
  return (
    <div className="card m-4" style={{ width: "25rem", height: "35rem" }}>
      <div
        className="position-relative"
        style={{ height: "18rem", overflow: "hidden" }}
           
      >
        <img
          src={imageUrl}
          className="card-img-top"
          alt="..."
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay">
          <h2 className="card-title text-white m-0 p-3">{title}</h2>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{}}>
          <FaMapMarkerAlt style={{ marginBottom: "7px", color: "#ffa500" }} />{" "}
          {title}
        </h5>
        <p className="card-text">{description}</p>
        <h4 className="card-title ms-1">{price} PHP</h4>
        <a
          href="#"
          className="btn btn-primary mt-2"
          style={{ backgroundColor: "#ffa500", borderColor: "#ffa500" }}
        >
          Book Now
        </a>
      </div>
    </div>
  )
}

export default Card
