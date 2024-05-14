import React, { useState } from 'react'
import '../../styles/Seat.css' 

const Seat = () => {
    const seatCodes = ['1A', '2A', '3A', '1B', '2B', '3B', '1C', '2C', '3C'];
    const passengers = ['Passenger #1', 'Passenger #2', 'Passenger #3'];
    const [selectedSeats, setSelectedSeats] = useState({});
  
    const handleSeatChange = (passenger, seat) => {
      setSelectedSeats({
        ...selectedSeats,
        [passenger]: seat,
      });
    };
  
    const allSeatsSelected = passengers.every(
      (passenger) => selectedSeats[passenger]
    );
  
    const handleSubmit = () => {
      if (allSeatsSelected) {
        alert('Seats assigned successfully!');
        // Here you can add further handling logic
      } else {
        alert('Please select seats for all passengers.');
      }
    };
  
    return (
    <div id="background-seat">
      <div className="container" id='container-seat'>
        <h1 className="text-center my-4" id='h1-seat'><span id='title1-seat'>Assign</span> Seats</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {passengers.map((passenger, index) => (
              <div key={index} className="mb-4">
                <h5 id='title2-seat'>{passenger}</h5>
                <select
                  className="form-select mb-2"
                  value={selectedSeats[passenger] || ''}    
                  onChange={(e) => handleSeatChange(passenger, e.target.value)}
                >
                  <option value="" disabled>Select a seat</option>
                  {seatCodes.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              className="btn btn-primary mt-4"
              onClick={handleSubmit}
              disabled={!allSeatsSelected}
              id='btn-seat'
            >
              Done
            </button>
          </div>
          <div className="col-md-6">
            <img
              src="/images/SeatChart.png"
              alt="Seat Chart"
              className="img-fluid"
              id='img-fluid'
            />
          </div>
        </div>
      </div>
     </div>

    );
  };
export default Seat
