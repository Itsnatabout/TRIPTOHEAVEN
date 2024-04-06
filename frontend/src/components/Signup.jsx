import { useState } from "react"
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
    age: `2`, // need to calculate age 
    flexRadioDefault: ``, //sex
    mobilenumber: ``,
    role: `1`,
    password: ``,
    rptpassword: ``,
  })

  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(Validation(values));
    if (
      errors.username === "" &&
      errors.firstname === "" &&
      errors.middlename === "" &&
      errors.lastname === "" &&
      errors.email === "" &&
      errors.dateofbirth === "" &&
      errors.flexRadioDefault === "" &&
      errors.mobilenumber === "" &&
      errors.password === "" &&
      errors.rptpassword === ""
    ) {
      axios
        .post("http://localhost:5000/signup", values)
        .then((res) =>
          console.log(res) //error with axios di ko alam baket 
        )
        .catch((err) => console.log(err));
    }
    else {
      console.log("error")
      
    }
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
