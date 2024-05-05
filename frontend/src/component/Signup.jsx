import React from 'react'
import './Styles/Signup.css' 
const Login = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card p-4">
            <div className="card-body" id='cardBody'>
              <div className="Title text-center">
              <h1><span>R</span>EGISTER</h1>
              </div>
              <form action="">
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder='Email' />
                <input type="text" name="Uname" className="form-control" id="Uname" placeholder='Username' />
                <input type="password" name="password" id="password" className="form-control  py-2" placeholder='Password' />
                <input type="password" name="Repassword" id="Repassword" className="form-control  py-2" placeholder='Repeat Password' />
                <input type="text" name="Fname" id="Fname" className="form-control  py-2" placeholder='First Name' />
                <input type="text" name="Mname" id="Mname" className="form-control  py-2" placeholder='Middle Name' />
                <input type="text" name="Lname" id="Lname" className="form-control  py-2" placeholder='Last Name' />
                <div className="gender">
                Sex:
                <input type="radio"  name='radio' id='option1'/><label htmlFor="option1" style={{margin:'0px 8px'}}>Male</label>
                <input type="radio"  name='radio' id='option2'/><label htmlFor="option2" style={{margin:'0px 8px'}}>Female</label>
                <input type="radio"  name='radio' id='option3' /><label htmlFor="option3" style={{margin:'0px 8px'}}>Other</label>             
                </div>
                <div className="BdayContainer form-outline mb-4" id='BdayContainer'>
                Birth Date:
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"                
                  className="form-control form-control-lg"
                  placeholder="Birth"
                />              
              </div>

                <div className="subContainer text-center">
                  <button className="btn btn-primary mt-2 my-2" name='submit' id='submit'>Submit</button>            
                  <p><span>Already have an account?</span><a href="./Login.jsx" className='m-1'>Login here</a></p>                 
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
