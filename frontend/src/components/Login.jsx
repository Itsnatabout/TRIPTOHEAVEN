import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Validation from "./LoginValidation"
import '../styles/Login.css'
import Header from './Header'


const Login = () => {

    const [values, setValues] = useState({
        loginEmail: ``,
        loginPass: ``
    })
    const [errors, setErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();
  
    const handleInput = (event) => {
        setValues((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }))
      }

  useEffect(() => {
    const checkSubmit = async () => {
      // Check for errors only if form is submitted
      const checkError = Object.values(errors).every(error => error === "");
      
      if (formSubmitted && checkError) {
        try {
          // No errors and form has been submitted, proceed with form submission
          const response = await axios.post("http://localhost:5000/login", values);
          
          //!!!!!!!!!! TEMPORARY TEST THE AUTH !!!!!!!!!!!!!!
          if (response.data.loggedIn) {
            alert('Successfully Logged in');
            
            if (response.data.role === "1") {
              navigate('/');
            }
            else if(response.data.role === "2")
            navigate('/dashboard')
          } 

        } catch (error) {
          console.log(error);
        }
        
        // Reset formSubmitted after successful submission
        setFormSubmitted(false);
      } else {
        setFormSubmitted(false);
      }
    };
      checkSubmit()
      }, [values, errors, formSubmitted, navigate]); // This effect depends on errors and values


    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrors(Validation(values));
        setFormSubmitted(true);
      }


  return (
    <>
      <Header />
    <div className="d-flex justify-content-center align-items-center vh-100 coverbody" >
      <div className="text-bg-dark p-3 mt-5 rounded w-25 container">
        <h3 className="text-center">Login</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group mx-3 pt-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="loginEmail" onChange={handleInput}/>
                      <small id="emailHelp" className="form-text text-reset">We'll never share your email with anyone else.</small><br />
                      {errors.loginEmail && (
                  <span className="text-danger">{errors.loginEmail}</span>
                )}
                </div>
                <div className="form-group mx-3 pt-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="loginPass" onChange={handleInput} />
                      {errors.loginPass && (
                  <span className="text-danger">{errors.loginPass}</span>
                )}
                  </div>
                  
                <div className="form-group form-check mx-3 pt-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                 <Link to="/signup" className="btn btn-deafult border w-100 bg-light rounded-0 text-decoration-none mt-3">Create Account</Link>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
       
    </div>
    </>
    
  )
}

export default Login
