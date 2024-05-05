import React from 'react'
import '../Styles/Login.css' 
const Login = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card p-4">
            <div className="card-body" id='cardBody'>
              <div className="Title text-center">
              <h1><span>T</span>RIP TO HEAVEN</h1>
              </div>
              <form action="">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                <label htmlFor="password" className="form-label my-2">Password</label>
                <input type="password" name="password" id="password" className="form-control  py-2" placeholder='' />
                <div className="subContainer text-center">
                  <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Login</button>            
                  <p>Don't have an account yet?<a href="./Signup.jsx" className='m-1'>Register here</a></p>                 
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
