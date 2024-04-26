import React from 'react'
import '../../Styles/Manage.css' 
const Login = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card p-4">
            <div className="card-body" id='cardBody'>
              <div className="Title text-center">
              <h1><span>M</span>ANAGE BOOKING</h1>
              </div>
              <form action="">
                <label htmlFor="RefNum" className="form-label my-2">Reference Number</label>
                <input type='text' name="RefNum" id="RefNum" className="form-control  py-2" placeholder='e.g 0123456789' />  

                <label htmlFor="email" className="form-label my-2">Email address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='example@gmail.com'/>
               
                <div className="subContainer text-center">
                  <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Find my Booking</button>            
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
