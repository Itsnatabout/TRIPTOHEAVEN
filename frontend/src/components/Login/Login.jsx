import React from 'react'
import '../../styles/Login.css' 
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div id="background-login">
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card p-4" id='card-Login'>
            <div className="card-body" id='cardBody-Login'>
              <div className="Title text-center"id='Title-login'>
              <h1><span id='span-login'>T</span>RIP TO HEAVEN</h1>
              </div>
              <form action="">
                <label id='label-login' htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <label id='label-login' htmlFor="password" className="form-label my-2">Password</label>
                <input type="password" name="password" id="password" className="form-control  py-2" placeholder='' />
                <div className="subContainer text-center">
                  <button className="btn btn-primary mt-3 my-2" name='submit' id='submit-Login'>Login</button> 
                            
                  <p>Don't have an account yet?<Link to="/Signup"id='link-Register'>Register here</Link></p>   
                                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
