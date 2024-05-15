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

  const handleFormSubmit = (data) => {
    // console.log("Received form data from child:", data);
    // You can now navigate or process the data as needed
    const combinedData = { ...addedData, data };
        console.log(combinedData);
        navigate('/Book/AvailableFlights/Passenger/Seat', { state: { addedData: combinedData} });
  };

console.log(addedData)


  
  

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
