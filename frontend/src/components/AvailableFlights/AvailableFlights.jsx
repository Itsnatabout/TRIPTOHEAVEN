import React from 'react'
import '../../styles/AvailableFlights.css' 
import Header from '../../components/Header'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const AvailableFlights = () => {
 




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
                            {flights.map(flight => (
                            <tr key={flight.id}>
                                <td>{flight.id}</td>
                                <td>{flight.from}</td>
                                <td>{flight.to}</td>
                                <td>{flight.departureTime}</td>
                                <td>{flight.arrivalTime}</td>
                                <td>{flight.price}</td>
                                <td>
                                    <button className="btn btn-primary" id='bookbtn' onClick={() => handleBookFlight(flight.id)}>Book</button>
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
