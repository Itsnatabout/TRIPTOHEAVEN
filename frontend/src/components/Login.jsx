import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Validation from "./LoginValidation"
import "../Styles/Login.css"
import Header from "./Header"

const Login = () => {
  const [values, setValues] = useState({
    loginEmail: ``,
    loginPass: ``,
  })
  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  useEffect(() => {
    const checkSubmit = async () => {
      // Check for errors only if form is submitted
      const checkError = Object.values(errors).every((error) => error === "")

      if (formSubmitted && checkError) {
        try {
          // No errors and form has been submitted, proceed with form submission
          const response = await axios.post(
            "http://localhost:5000/login",
            values
          )

          if (response.data.loggedIn) {
            alert("Successfully Logged in")
            navigate("/")
          }
        } catch (error) {
          console.log(error)
        }

        // Reset formSubmitted after successful submission
        setFormSubmitted(false)
      } else {
        setFormSubmitted(false)
      }
    }
    checkSubmit()
  }, [values, errors, formSubmitted, navigate]) // This effect depends on errors and values

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(Validation(values))
    setFormSubmitted(true)
  }

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100 coverbody">
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
              <div className="card p-4">
                <div className="card-body" id="cardBody">
                  <div className="Title text-center">
                    <h1 style={{ color: "goldenrod" }}>TRIP TO HEAVEN</h1>
                  </div>
                  <form action="" onSubmit={handleSubmit}>
                    <div className="form-group mx-3 pt-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        onChange={handleInput}
                      />
                      {errors.loginEmail && (
                        <span className="text-danger">{errors.loginEmail}</span>
                      )}
                    </div>
                    <div className="form-group mx-3 pt-3">
                      <label htmlFor="password" className="form-label my-2">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control py-2"
                        placeholder=""
                        onChange={handleInput}
                      />
                      {errors.loginPass && (
                        <span className="text-danger">{errors.loginPass}</span>
                      )}
                    </div>
                    <div className="subContainer text-center">
                      <button
                        className="btn btn-primary mt-3 my-2"
                        name="submit"
                        id="submit"
                      >
                        Login
                      </button>
                      <p>
                        Don't have an account yet?
                        <Link to="/signup">
                          <a href="" className="m-1">
                            Register here
                          </a>
                        </Link>
                      </p>
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
