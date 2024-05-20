import React from 'react'
import Passengers from "./Passengers"
import Header from '../../components/Header'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom"


const PassengersViewer = () => {
  const location = useLocation();
  const { addedData } = location.state || {};
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    // console.log("Received form data from child:", data);
    // You can now navigate or process the data as needed
    const combinedData = { ...addedData };
    console.log(combinedData);

    try {
      // Make an Axios POST request
      const response = await axios.post('http://localhost:5000/getpassenger', data);
      const fetchedPassengers = response.data; // Save fetched passengers
      console.log('Booking response:', fetchedPassengers);
      
  

  
      // Navigate to the next page with state after updating state
      navigate('/Book/AvailableFlights/Passenger/Seat', { state: { addedData: combinedData, fetchedPassengers } });
  
  } catch (error) {
      console.error("Error booking flight:", error);
      // Handle the error appropriately, e.g., show a message to the user
  }
  };
  
  

  return (
    <>
      <Header/>
      <Passengers numAdults={addedData.adults} onSubmit={handleFormSubmit}/>
    <div>
      
    </div>
    </>
    
  )
}

export default PassengersViewer
