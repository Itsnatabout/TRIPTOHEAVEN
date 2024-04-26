
function Validation(values) {
  let error = {}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const userRegex = /^[a-zA-Z0-9_!@#$%^&*()-+=~]{4,16}$/
    const textRegex = /^(?!.*\d)(?![!@#$%^&*()-+=~])[\w\s]+$/
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+=~])[A-Za-z\d!@#$%^&*()-+=~]{8,}$/
    const mobRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/

  
  
  //--------------------SIGNUP--------------------------------------------
  //username
  if (values.username === "") {
    error.username = "Username should not be empty."
  } else if (!userRegex.test(values.username)) {
    error.username = "Enter Valid Username."
  } else {
    error.username = ""
  }

  //firstname
  if (values.firstname === "") {
    error.firstname = "First name should not be empty."
  } else if (!textRegex.test(values.firstname)) {
    error.firstname = "Enter a valid first name."
  } else {
    error.firstname = ""
  }

  //middlename
  if (values.middlename === "") {
    error.middlename = "Middle name should not be empty."
  } else if (!textRegex.test(values.middlename)) {
    error.middlename = "Enter a valid middle name."
  } else {
    error.middlename = ""
  }
  //lastname
  if (values.lastname === "") {
    error.lastname = "Last name should not be empty."
  } else if (!textRegex.test(values.lastname)) {
    error.lastname = "Enter a valid last name."
  } else {
    error.lastname = ""
  }
  //email
  if (values.email === "") {
    error.email = "Email should not be empty."
  } else if (!emailRegex.test(values.email)) {
    error.email = "Enter a valid email."
  } else {
    error.email = ""
  }
  //dateofbirth
  if (values.dateofbirth === "") {
    error.dateofbirth = "Enter date of birth."
  } else {
    error.dateofbirth = ""
  }

  //sex
  if (values.flexRadioDefault === "") {
    error.flexRadioDefault = "Select Gender."
  } else {
    error.flexRadioDefault = ""
  }

  //mobile number
  if (values.mobilenumber === "") {
    error.mobilenumber = "Enter Mobile Number."
  } else if (!mobRegex.test(values.mobilenumber)) {
    error.mobilenumber = "Enter valid Mobile Number" //FIX check for the length
  } else {
    error.mobilenumber = ""
  }
  //password
  if (values.password === "") {
    error.password = "Enter Password."
  } else if (values.rptpassword === "") {
    error.rptpassword = "Re enter Password."
  } else if (!passRegex.test(values.password)) {
    error.password =
      "Password must be 8 characters long and contain atleast 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character."
  } else if (!values.password === values.rptpassword) {
    error.rptpassword = "Password does not match."
  } else {
    error.password = ""
    error.rptpassword = ""
    }
    
    return error;
}

export default Validation
