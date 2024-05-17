import React, { useState, useEffect } from "react";
import "../../styles/Seat.css";
import Header from "../../components/Header";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Seat = () => {
  const location = useLocation();
  const { addedData, fetchedPassengers } = location.state || {};
  const navigate = useNavigate();

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});
  
  console.log(fetchedPassengers)
  
  const handleSeatChange = (passenger, seat) => {
    setSelectedSeats({
      ...selectedSeats,
      [passenger]: seat,
    });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getseats");
        setSeats(response.data); // Store the fetched data in state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately, e.g., show a message to the user
      }
    };

    fetchData();
  }, []);

  const allSeatsSelected = fetchedPassengers.every(
    (passenger) => selectedSeats[passenger.passengerID]
    
  );
  function getFormattedDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
  
    // Format: YYYY-MM-DD
    const formattedDate = `${year}-${month}-${day}`;
    
    return formattedDate;
  }

  const handleSubmit = async () => {

    const bookdate = getFormattedDate();


    if (allSeatsSelected) {
      // Here you can add further handling logic
      const combinedData = { ...addedData, ...selectedSeats, bookdate };
        // console.log(combinedData);
      try {
        // Make an Axios POST request
        const requestData = { combinedData, fetchedPassengers };
        console.log(requestData);
        const response = await axios.post('http://localhost:5000/bookFlight', requestData);
        console.log('Booking response:', response.data);

        // Navigate to the next page with state
        navigate('/Book/AvailableFlights/Passenger/Seat/Payment', { state: { addedData: combinedData, fetchedPassengers } });

    } catch (error) {
        console.error("Error booking flight:", error);
        // Handle the error appropriately, e.g., show a message to the user
    }



    } else {
      alert("Please select seats for all passengers.");
    }
  };

  return (
    <>
      <Header />
      <div id="background-seat">
        <div className="container" id="container-seat">
          <h1 className="text-center my-4" id="h1-seat">
            <span id="title1-seat">Assign</span> Seats
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              {addedData &&
                fetchedPassengers.map((passenger, index) => (
                  <div key={index} className="mb-4">
                    <h5 id="title2-seat">{passenger.firstName}</h5>
                    <select
                      className="form-select mb-2"
                      value={selectedSeats[passenger.passengerID] || ""}
                      onChange={(e) =>
                        handleSeatChange(passenger.passengerID, e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select a seat
                      </option>
                      {seats.map((code) => (
                        <option key={code.SeatID} value={code.SeatID}>
                          {code.seatno}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              <button
                className="btn btn-primary mt-4"
                onClick={handleSubmit}
                disabled={!allSeatsSelected}
                id="btn-seat"
              >
                Done
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="/images/SeatChart.png"
                alt="Seat Chart"
                className="img-fluid"
                id="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Seat;
