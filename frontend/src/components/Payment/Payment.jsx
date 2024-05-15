import React, { useState } from 'react';
import '../../styles/Payment.css' 
import Header from "../../components/Header";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
    const [promoCode, setPromoCode] = useState('');
    const [paymentProof, setPaymentProof] = useState(null);
    const location = useLocation();
    const { addedData } = location.state || {};
    const navigate = useNavigate();
  
  console.log(addedData);
    const handlePromoCodeChange = (e) => {
      setPromoCode(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your payment submission logic here
    };
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setPaymentProof(file);
    };

  return (
    <>
  <Header/>
    <div className="pictureContainer">
        <div className="Title1 text-center">
            <h1 id='Title1-payment'><span id='span1-payments'>Payment</span></h1>
            <p id='context-payment'>Please proceed to your payment on Gcash by scanning<br/>the QR code to complete your booking.</p>
        </div>
    </div>
    <div className="container" id='container-payment'>
    <div className="row" id='row'>
      <div className="col-12 col-sm-8 col-md-10 m-auto">
        <div className="card p-4" id='card-payment'>
          <div className="card-body" id='cardBody-payment'>
      <div className="booking-details">
        <h2 className="text-center"><span id='span2-payment'>Booking</span> Details</h2>
        <p><span id='span1-payment'><strong>From: </strong></span>{addedData.flight.departureName}</p>
        <p><span id='span1-payment'><strong>To: </strong></span>{addedData.flight.destinationName}</p>
        {/* <table className="table">
          <thead>
            <tr>
              <th>Reference Number</th>
              <th>Name</th>
              <th>Seat No.</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Date</th>
              <th>Fare</th>
            </tr>
          </thead>
          <tbody>
            {/* {bookingDetails.passengers.map((passenger, index) => (
              <tr key={index}>
                <td>{bookingDetails.referenceNumber}</td>
                <td>{passenger.name}</td>
                <td>{passenger.SeatNum}</td>
                <td>{passenger.departureTime}</td>
                <td>{passenger.arrivalTime}</td>
                <td>{passenger.date}</td>
                <td>{passenger.expense}</td>
              </tr>
            ))} 
          </tbody>
        </table> */}
        <br />
        <div className="promo-code">
          <label htmlFor="promoCode">Promo Code:</label>
          <input type="text" id="promoCode" value={promoCode} onChange={handlePromoCodeChange} />
        </div>

        <br />
        <div className="transaction-summary">
          <h3 className='text-center'><span id='span2-payment'>Summary</span> of Transaction</h3>
          {/* <p><strong>Fare per Passenger:</strong> {bookingDetails.farePerPassenger}</p>
          <p><strong>Passenger Quantity:</strong> {bookingDetails.PassengerQty}</p>
          <p><strong>Discount Percentage:</strong> {bookingDetails.discountPercentage}%</p>
          <p><strong>Total:</strong> {bookingDetails.total}</p> */}
        </div>
      </div>
    </div>
    <div className="text-center">
        <h1>SCAN HERE!</h1>
    </div>
    <div className="text-center">
    <img src="/images/qr.jpg" alt="" id='qr-payment' />
    </div>
    <div className="form-group">
            <label htmlFor="proofOfPayment">Proof of Payment:</label>
            <input type="file" className="form-control-file" id="proofOfPayment" accept="image/*" onChange={handleFileChange} />
    </div>
    <div className="text-center mt-4">
      <button className="btn btn-primary" id='submit-payment' onClick={handleSubmit}>Submit</button>
      <button className="btn btn-primary" id='skip-payment' onClick={handleSubmit}>Skip For Now</button>
    </div>
  </div>
  </div>
  </div>
  </div>
  </>
  );
};

export default Payment;
