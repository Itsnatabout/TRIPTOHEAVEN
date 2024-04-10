import React, { useState} from 'react';
import './Signup.css'; 

function SignUpForm() {   

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    birthDate: '',
    sex: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Perform validation here
    // Example: Check if fields are empty
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.firstName.trim()) {
      validationErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = 'Last Name is required';
    }
    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile Number is required';
    }
    if (!formData.birthDate.trim()) {
        validationErrors.birthDate = 'Birth Date is required';
    }
      if (!formData.sex.trim()) {
        validationErrors.sex = 'Gender is required';
    }
    if (!formData.email.trim()) {
        validationErrors.email = 'Email is required';
    } 
    if (!formData.password.trim()) {
        validationErrors.password = 'Password is required';
    } 
    if (!formData.repeatPassword.trim()) {
        validationErrors.repeatPassword = 'Repeating Password is required';
    } 
    // Add more validation rules as needed
    setErrors(validationErrors);
  };

  return (
    <section className="vh-100">

      <div className="container-fluid h-custom">
        
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" id='wrapper'>
            <form onSubmit={handleSubmit}>

              <div className="logLabel">
                <h1 style={{color:'goldenrod', }}>Sign Up</h1>
              </div>
              {/* Username input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Username"
                />
                {errors.username && <div className="text-danger">{errors.username}</div>}
              </div>
              {/* First Name input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="First Name"
                />
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
              </div>
              {/* Middle Name input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Middle Name"
                />
              </div>
              {/* Last Name input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Last Name"
                />
                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
              </div>
              {/* Mobile Number input */}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Mobile Number"
                />
                {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
              </div>
              {/* Birth Date input */}
              <div className="form-outline mb-4">
                <p style={{color:'black'}}>Birth Date:</p>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Birth"
                />
                {errors.birthDate && <div className="text-danger">{errors.birthDate}</div>}

              </div>
              {/* Sex input */}
              <div className="form-outline mb-4">
                <div className="gender">
                Sex:
                <input type="radio" value={formData.sex} name='radio' id='option1'/><label for="option1" style={{marginLeft:'5px'}}>Male</label>
                <input type="radio" value={formData.sex} name='radio' id='option2'/><label for="option2" style={{marginLeft:'5px'}}>Female</label>
                <input type="radio" value={formData.sex} name='radio' id='option3' /><label for="option3" style={{marginLeft:'5px'}}>Other</label>

                {errors.sex && <div className="text-danger">{errors.sex}</div>}
                </div>
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Email address"
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}

              </div>
              {/* Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
                {errors.password && <div className="text-danger">{errors.password}</div>}

              </div>
              {/* Repeat Password input */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                  placeholder="Repeat password"
                />
                {errors.repeatPassword && <div className="text-danger">{errors.repeatPassword}</div>}

              </div>
              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3" style={{color: 'rgb(57, 56, 56)'}}>
                    Check me out
                  </label>
                </div>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    marginTop: '-20px',
                    width: '100%',
                    borderRadius: '20px',
                    paddingLeft: '2.5rem',
                    paddingRight: '2.5rem',
                  }}
                >
                  Submit
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0" style={{ marginLeft: '20%' }}>
                  You have an account? <a href="#!" className="link-danger">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
