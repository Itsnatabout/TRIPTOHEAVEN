import React from 'react'
import '../../styles/AvailableFlights.css' 
import Header from '../../components/Header'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom"

const AvailableFlights = () => {
    const [flights, setFlights] = useState([]);
    const location = useLocation();
    const { formData } = location.state || {};
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getFlights", {
                    params: {
                        departureID: formData.selectedFromAirport,
                        destinationID: formData.selectedToAirport
                  }
                });
              setFlights(response.data) // Store the fetched data in state
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error appropriately, e.g., show a message to the user
            }
        }
        fetchData();
    }, [formData]); // Ensure useEffect runs when formData changes

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleBookFlight = (flight) => {
        const price = generateRandomNumber(2000, 6000);
        const combinedData = { ...formData, ...flight, price };
        navigate('/Book/AvailableFlights/Passenger', { state: { addedData: combinedData} });
    };

    return (
        <>
            <Header />
            <div className="container mt-5" id='container-avFlights'>
                <h1 className="text-center mb-4" id='title-avFlights'><span id='span1'>Available</span> Flights</h1>
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-11 m-auto">
                        <div className="card p-4" id='card-avFlights'>
                            <div className="card-body" id='cardBody-avFlights'>
                                {flights.length === 0 ? (
                                    <div className="text-center">No flights available</div>
                                ) : (
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>From</th>
                                                <th>To</th>
                                                <th>Departure Time</th>
                                                <th>Arrival Time</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {flights.map((flight) => (
                                                <tr key={flight.FlightID}>
                                                    <td>{flight.FlightID}</td>
                                                    <td>{flight.departureName}</td>
                                                    <td>{flight.destinationName}</td>
                                                    <td>{flight.departDateTime}</td>
                                                    <td>{flight.arrivalDateTime}</td>
                                                    <td>{generateRandomNumber(2000, 6000)}</td>
                                                    <td>
                                                        <button className="btn btn-primary" id='bookbtn' onClick={() => handleBookFlight(flight)}>Book</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvailableFlights;
