import React from 'react'
import '../../styles/Manage.css' 
import Header from "../Header"

const Login = () => {
  return (
  <>
  <Header/>

  <div id="background-Manage">
    
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card p-4" id='card-manage'>
            <div className="card-body" id='cardBody-manage'>
              <div className="Title text-center" id='Title-manage'>
              <h1><span id='span1-manage'>M</span>ANAGE BOOKING</h1>
              </div>
              <form action="">
                <label id='label-manage' htmlFor="RefNum" className="form-label my-2">Reference Number</label>
                <input type='text' name="RefNum" id="RefNum" className="form-control  py-2" placeholder='e.g 0123456789' />  

                <label id='label-manage' htmlFor="email" className="form-label my-2">Email address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='example@gmail.com'/>
               
                <div className="subContainer text-center">
                  <button className="btn btn-primary mt-3 my-2" name='submit' id='submit-manage'>Find my Booking</button>            
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Login
