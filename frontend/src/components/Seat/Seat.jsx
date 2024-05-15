import React, { useState, useEffect } from "react";
import "../../styles/Seat.css";
import Header from "../../components/Header";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Seat = () => {
  const location = useLocation();
  const { addedData } = location.state || {};
  const navigate = useNavigate();

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState({});

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

  const allSeatsSelected = addedData.data.every(
    (passenger) => selectedSeats[passenger.Fname]
    
  );


  const handleSubmit = () => {
    if (allSeatsSelected) {
      // Here you can add further handling logic
      const combinedData = { ...addedData, selectedSeats };
        console.log(combinedData);
        navigate('/Book/AvailableFlights/Passenger/Seat/Payment', { state: { addedData: combinedData} });
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
                addedData.data.map((passenger, index) => (
                  <div key={index} className="mb-4">
                    <h5 id="title2-seat">{passenger.Fname}</h5>
                    <select
                      className="form-select mb-2"
                      value={selectedSeats[passenger.Fname] || ""}
                      onChange={(e) =>
                        handleSeatChange(passenger.Fname, e.target.value)
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
