import { useState, useEffect } from "react"
import axios from "axios"
import Validation from "./Validation"

const Signup = () => {
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

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(values.dateofbirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setValues((prev) => ({
      ...prev,
      age: age.toString(), // Convert age to string before setting it
    }));
  };

 useEffect(() => {
    // Check for errors only if form is submitted
      const checkError = Object.values(errors).every(error => error === "")
      if (formSubmitted && checkError) {
        // No errors and form has been submitted, proceed with form submission
        axios
          .post("http://localhost:5000/signup", values)
          .then((res) =>
            console.log(res)
          )
          .catch((err) => console.log(err));

        // Reset formSubmitted after successful submission
        setFormSubmitted(false);
      } else {
        setFormSubmitted(false);
      }
  }, [values, errors, formSubmitted]); // This effect depends on errors and values
  
  const handleSubmit = (event) => {
    event.preventDefault()
    calculateAge();
    setErrors(Validation(values));
    setFormSubmitted(true);
  }

  return (
    <div className="text-bg-dark d-flex justify-content-center align-items-center vh-100">
      <div className="text-bg-light p-3 rounded w-25 container">
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="mx-3 pt-3">
                <label htmlFor="" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="username"
                  onChange={handleInput}
                />
                {errors.username && (
                  <span className="text-danger">{errors.username}</span>
                )}
              </div>
              <div className="mx-3 pt-3">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="firstname"
                  onChange={handleInput}
                />
                {errors.firstname && (
                  <span className="text-danger">{errors.firstname}</span>
                )}
              </div>
              <div className="mx-3 pt-3">
                <label htmlFor="" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="middlename"
                  onChange={handleInput}
                />
              </div>
              {errors.middlename && (
                <span className="text-danger">{errors.middlename}</span>
              )}
              <div className="mx-3 pt-3">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="lastname"
                  onChange={handleInput}
                />
              </div>
              {errors.lastname && (
                <span className="text-danger">{errors.lastname}</span>
              )}
              <div className="mx-3 pt-3">
                <label htmlFor="" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id=""
                  name="dateofbirth"
                  onChange={handleInput}
                />
              </div>
              {errors.dateofbirth && (
                <span className="text-danger">{errors.dateofbirth}</span>
              )}
            </div>
            <div className="col">
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
              {errors.flexRadioDefault && (
                <span className="text-danger">{errors.flexRadioDefault}</span>
              )}
              <div className="mx-3 pt-3">
                <label htmlFor="" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="mobilenumber"
                  onChange={handleInput}
                />
              </div>
              {errors.mobilenumber && (
                <span className="text-danger">{errors.mobilenumber}</span>
              )}
              <div className="mx-3 pt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={handleInput}
                />
              </div>
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
              <div className="m-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  onChange={handleInput}
                />
              </div>
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
              <div className="m-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Repeat Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="rptpassword"
                  onChange={handleInput}
                />
              </div>
              {errors.rptpassword && (
                <span className="text-danger">{errors.rptpassword}</span>
              )}
            </div>
          </div>

          <div className="m-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
