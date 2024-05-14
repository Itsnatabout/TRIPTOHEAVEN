import React from 'react'
import '../../styles/AvailableFlights.css' 
import Header from '../../components/Header'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const AvailableFlights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:5000/getFlights")
                setFlights(response.data) // Store the fetched data in state
                console.log(response.data)
            } catch (error) {
              console.error("Error fetching data:", error)
              // Handle the error appropriately, e.g., show a message to the user
            }
          }
      
          fetchData()
    }, []);
  
 
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

  return (
    <>
    <Header/>
    <div>

    </div>
    <div className="container mt-5" id='container-avFlights'>
    <h1 className="text-center mb-4" id='title-avFlights'><span id='span1'>Available</span> Flights</h1>

        <div className="row">
            <div className="col-12 col-sm-8 col-md-11 m-auto">
                <div className="card p-4" id='card-avFlights'>
                    <div className="card-body" id='cardBody-avFlights'></div>
                        <table className="table table-striped">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Price</th>
                            <th>Action</th> {/* New column for the "Book" button */}
                            </tr>
                        </thead>
                        <tbody>
                            {flights.map((flight, idx) => (
                            <tr key={flight.FlightID}>
                                <td>{flight.FlightID}</td>
                                <td>{flight.departureName}</td>
                                <td>{flight.destinationName}</td>
                                <td>{flight.departDateTime}</td>
                                <td>{flight.arrivalDateTime }</td>
                                <td>{generateRandomNumber(2000, 6000)}</td>
                                <td>
                                    <button className="btn btn-primary" id='bookbtn' onClick={() => handleBookFlight(idx)}>Book</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </div>

    </>                        
  );
};

export default AvailableFlights
