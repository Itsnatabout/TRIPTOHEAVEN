import React from 'react'
import '../../styles/EditBooking.css' 
import Header from "../Header"

const EditBooking = () => {
  return (
    <>
    <Header/>

    <div className='PictureContainer'>
        <div className="Title1 text-center">
            <p id='Title1-editBook'><span id='span1-editBook'>Manage</span> Booking</p>
            <p id='context-editBook'>Access your booking information, where permitted, change seats, cancel booking and refund<br/> up to two (2) hours before your flight!</p>
        </div>     
    </div>
    <div className="container">
    <div className="row" id='row'>
      <div className="col-12 col-sm-8 col-md-10 m-auto">
        <div className="card p-4" id='card'>
          <div className="card-body" id='cardBody'>
            <div className="flightInfo">
            <div className="Destination text-center">
              <h1><span id='span2-editBook'>From:</span> Manila | <span id='span2-editBook'>To:</span> Cebu</h1>{/* From and To */}
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
                    <th scope="col">Seat No.</th>
                    <th scope="col">Nationality</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Tahimik Lang</td>
                    <td>01/02/2001</td>
                    <td>A1</td>
                    <td>Filipino</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Boar</td>
                    <td>Rat</td>
                    <td>01/02/2001</td>
                    <td>A2</td>
                    <td>Filipino</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td >Diwata</td>
                    <td >Pares</td>
                    <td>01/02/2001</td>
                    <td>A3</td>
                    <td>Filipino</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            </div>          
            <div className="subContainer text-center">               
              <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Change Seats</button> 
              <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Cancel Booking</button>    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default EditBooking
