import { useState, useEffect } from "react"
// import Validation from "../Validation"
import axios from "axios"

const UserModal = ({ closeModal, userData }) => {
  const [values, setValues] = useState({
    userID: userData.userID,
    username: userData.username,
    firstname: userData.firstname,
    middlename: userData.middlename,
    lastname: userData.lastname,
    email: userData.email,
    gender: userData.gender,
    mobilenumber: userData.mobilenum,
    role: userData.role,
    status: userData.status,
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // validation here if needed
    setFormSubmitted(true)
    console.log(values);
  }

  useEffect(() => {
    if (formSubmitted) {
      axios
      .post("http://localhost:5000/updateUsers", values)
      .then(alert("Updated Sucessfully!"), closeModal())
      .catch((err) => console.log(err))

    // Reset formSubmitted after successful submission
    setFormSubmitted(false)
    } else {
      setFormSubmitted(false)
  }

}, [formSubmitted, values, closeModal]);




  return (
    <>
      <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }} id="test" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit</h1>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="modal-body p-4">
                <div className="row">
                  <div className="col mx-2">
                    <div className="mb-3">
                      <label htmlFor="" className="">UserID: <b>{userData.userID}</b></label>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Username</label>
                      <input type="text" className="form-control" name="username" onChange={handleInput} value={values.username} />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">First Name</label>
                      <input type="text" className="form-control" name="firstname" onChange={handleInput} value={values.firstname} />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Middle Name</label>
                      <input type="text" className="form-control" name="middlename" onChange={handleInput} value={values.middlename} />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Last Name</label>
                      <input type="text" className="form-control" name="lastname" onChange={handleInput} value={values.lastname} />
                    </div>
                  </div>
                  <div className="col mx-2">
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Email</label>
                      <input type="text" className="form-control" name="email" onChange={handleInput} value={values.email} />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Mobile Number</label>
                      <input type="text" className="form-control" name="mobilenumber" onChange={handleInput} value={values.mobilenumber} />
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Gender</label>
                      <select className="form-select" name="gender" onChange={handleInput} value={values.gender}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Role</label>
                      <select className="form-select" name="role" onChange={handleInput} value={values.role}>
                        <option value="1">User</option>
                        <option value="2">Admin</option>
                      </select>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="" className="">Status</label>
                      <select className="form-select" name="status" onChange={handleInput} value={values.status}>
                        <option value="active">Active</option>
                        <option value="disabled">Disabled</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserModal;
