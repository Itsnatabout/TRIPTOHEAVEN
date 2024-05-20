import "../../styles/Signup.css"
import { useState, useEffect } from "react"
import axios from "axios"
import Validation from "../Validation"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [values, setValues] = useState({
    username: ``,
    firstname: ``,
    middlename: ``,
    lastname: ``,
    email: ``,
    dateofbirth: ``,
    age: ``,
    flexRadioDefault: ``, //sex
    mobilenumber: ``,
    role: `1`,
    password: ``,
    rptpassword: ``,
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

  const calculateAge = () => {
    const today = new Date()
    const birthDate = new Date(values.dateofbirth)
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    setValues((prev) => ({
      ...prev,
      age: age.toString(), // Convert age to string before setting it
    }))
  }

  useEffect(() => {
    // Check for errors only if form is submitted
    const checkError = Object.values(errors).every((error) => error === "")
    if (formSubmitted && checkError) {
      // No errors and form has been submitted, proceed with form submission
      axios
        .post("http://localhost:5000/signup", values)
        .then(alert("Registered Sucessfully!"), navigate("/login"))
        .catch((err) => console.log(err))

      // Reset formSubmitted after successful submission
      setFormSubmitted(false)
    } else {
      setFormSubmitted(false)
    }
  }, [values, errors, formSubmitted, navigate]) // This effect depends on errors and values

  const handleSubmit = (event) => {
    event.preventDefault()
    calculateAge()
    setErrors(Validation(values))
    setFormSubmitted(true)
  }

  return (
    <div id="background-Signup">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card p-4" id="card-Signup">
              <div className="card-body" id="cardBody-Signup">
                <div className="Title text-center" id="Title-signup">
                  <h1>
                    <span id="span-signup">R</span>EGISTER
                  </h1>
                </div>
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    style={{ marginBottom: "2vh" }}
                    onChange={handleInput}
                  />{" "}
                  {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )}
                   <input
                  type="text"
                  className="form-control"
                  name="mobilenumber"
                    onChange={handleInput}
                    id="Uname"
                    placeholder="Mobile Number"
                    style={{ marginBottom: "2vh" }}
                />{errors.mobilenumber && (
                  <span className="text-danger">{errors.mobilenumber}</span>
                )}
                  <input
                    type="text"
                    name="username"
                    onChange={handleInput}
                    className="form-control"
                    id="Uname"
                    placeholder="Username"
                    style={{ marginBottom: "2vh" }}
                  />{" "}
                  {errors.username && (
                    <span className="text-danger">{errors.username}</span>
                  )}
                  <input
                    type="password"
                    name="password"
                  onChange={handleInput}
                    id="password"
                    className="form-control  py-2"
                    placeholder="Password"
                    style={{ marginBottom: "2vh" }}
                  /> {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                  <input
                    type="password"
                    name="rptpassword"
                    onChange={handleInput}
                    id="Repassword"
                    className="form-control  py-2"
                    placeholder="Repeat Password"
                    style={{ marginBottom: "2vh" }}
                  /> {errors.rptpassword && (
                    <span className="text-danger">{errors.rptpassword}</span>
                  )}
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleInput}
                    id="Fname"
                    className="form-control  py-2"
                    placeholder="First Name"
                    style={{ marginBottom: "2vh" }}
                  />{" "}
                  {errors.firstname && (
                    <span className="text-danger">{errors.firstname}</span>
                  )}
                  <input
                    type="text"
                    name="middlename"
                    onChange={handleInput}
                    id="Mname"
                    className="form-control  py-2"
                    placeholder="Middle Name"
                    style={{ marginBottom: "2vh" }}
                  />{" "}
                  {errors.middlename && (
                    <span className="text-danger">{errors.middlename}</span>
                  )}
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleInput}
                    id="Lname"
                    className="form-control  py-2"
                    placeholder="Last Name"
                    style={{ marginBottom: "2vh" }}
                  />{" "}
                  {errors.lastname && (
                    <span className="text-danger">{errors.lastname}</span>
                  )}
                  <div className="gender">
                    <div className="mx-3 pt-3 ">
                      <label htmlFor="" className="form-label">
                        Sex
                      </label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="Male"
                          value="Male"
                          onChange={handleInput} //how to handle radio buttons
                        />
                        <label className="form-check-label" htmlFor="">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="Female"
                          value="Female"
                          onChange={handleInput} //how to handle radio buttons
                        />
                        <label className="form-check-label" htmlFor="">
                          Female
                        </label>
                      </div>
                    </div>
                    
                  </div>{errors.flexRadioDefault && (
                <span className="text-danger">{errors.flexRadioDefault}</span>
              )}
                  <div
                    className="BdayContainer form-outline mb-4"
                    id="BdayContainer"
                  >
                    Birth Date:
                    <input
                      type="date"
                      id="birthDate"
                      name="dateofbirth"
                      onChange={handleInput}
                      className="form-control form-control-lg"
                      placeholder="Birth"
                    />
                  </div>
                  {errors.dateofbirth && (
                    <span className="text-danger">{errors.dateofbirth}</span>
                  )}
                  <div className="subContainer text-center">
                    <button
                      className="btn btn-primary mt-2 my-2"
                      name="submit"
                      id="submit"
                    >
                      Submit
                    </button>
                    <p>
                      <span id="span-signup">Already have an account?</span>
                      <Link to="/login" id="link-Login">
                        Login here
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
  )
}

export default Login
