import React from 'react'
import '../../styles/AvailableFlights.css' 
import Header from '../../components/Header'


const AvailableFlights = () => {
   // Dummy data for available flights
  const flights = [
    { id: 1, from: 'MANILA', to: 'CEBU', departureTime: '6:00 AM', arrivalTime: '8:30 PM', price: '₱5000' },
    { id: 2, from: 'MANILA', to: 'CEBU', departureTime: '11:30 AM', arrivalTime: '2:00 PM', price: '₱8000' },
    { id: 3, from: 'MANILA', to: 'CEBU', departureTime: '1:00 PM', arrivalTime: '3:30 PM', price: '₱6000' },
    // Add more flights as needed
      ];
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
