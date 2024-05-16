import React, { useState } from 'react'
import '../../styles/EditBooking.css' 
import Header from "../Header"
import Ticket from '../Ticket'; // Assuming Ticket component is in a separate file

const EditBooking = () => {
  const [paymentProof, setPaymentProof] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    origin: 'Manila',
    destination: 'Cebu',
    passengers: [
      {referenceNumber: 'ABC1',name: 'Mark TahimikLang', SeatNum:'A1', departureTime: '10:00 AM', arrivalTime: '12:00 PM', date: '2024-05-15', expense: '₱5000' },
      { referenceNumber: 'ABC2',name: 'Boar Ring', SeatNum:'A2', departureTime: '10:00 AM', arrivalTime: '12:00 PM', date: '2024-05-16', expense: '₱5000' },
      { referenceNumber: 'ABC3',name: 'Diwata Pares', SeatNum:'A3', departureTime: '10:00 AM', arrivalTime: '12:00 PM', date: '2024-05-16', expense: '₱5000' },
    ],
  });
  const [paymentCompleted, setPaymentCompleted] = useState(false); // State to track payment completion

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment submission logic here
    setPaymentCompleted(true);

  };
  
  return (
    <>
    <Header/>

    <div className='PictureContainer-editbook'>
        <div className="Title1 text-center">
            <p id='Title1-editBook'><span id='span1-editBook'>Manage</span> Booking</p>
            <p id='context-editBook'>Access your booking information, where permitted, view your ticket, pay booking, change seats,<br/> cancel booking and refund up to two (2) hours before your flight!</p>
          
        </div>     
    </div>
    <div className="container" id='container-editbooking'>
    <div className="row" id='row'>
      <div className="col-12 col-sm-8 col-md-10 m-auto">
        <div className="card p-4" id='card-editbooking'>
          <div className="card-body" id='cardBody-editbooking'>
            <div className="flightInfo">
            <div className="Destination text-center">
              <h1><span id='span2-editBook'>From:</span> Manila | <span id='span2-editBook'>To:</span> Cebu</h1>{/* From and To */}
            </div>
            <div className="FlightStatus text-center">
              <p><span id='span3-editBook'>Status: </span>on-boarding</p>
            </div>
            <div className="Title3 text-center">
            <p id='Title2'>Passengers</p>
            </div>
            <div className="table">
              <table className="table table-striped">
              <thead>
                  <tr>
                    <th scope="col">Booking ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Birth of Date</th>
                    <th scope="col">Nationality</th>
                    <th scope="col">Status</th>             
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Tahimik Lang</td>
                    <td>01/02/2001</td>
                    <td>Filipino</td>                    
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Boar</td>
                    <td>Rat</td>
                    <td>01/02/2001</td>
                    <td>Filipino</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td >Diwata</td>
                    <td >Pares</td>
                    <td>01/02/2001</td>
                    <td>Filipino</td>
                    <td>Paid</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            </div>          
            <div className="subContainer text-center">               
              <button className="btn btn-primary mt-3 my-2" name='submit' id='submit' onClick={handleSubmit}>View Ticket</button> 
              <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Pay Now</button> 
              <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Change Seats</button> 
              <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Cancel Booking</button>    
            </div>
            {/* Your existing JSX */}
            {paymentCompleted && <Ticket bookingDetails={bookingDetails} />}
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default EditBooking
