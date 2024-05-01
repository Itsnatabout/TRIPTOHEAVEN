function loginValidation(values) {
    let error = {}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+=~])[A-Za-z\d!@#$%^&*()-+=~]{8,}$/

    

      //------------------------LOGIN----------------------------------------
  //loginEmail
  if (values.loginEmail === "") {
    error.loginEmail = "Email should not be empty."
  } else if (!emailRegex.test(values.loginEmail)) {
    error.loginEmail = "Enter a valid email."
  } else {
    error.loginEmail = ""
  }
//loginPass
  if (values.loginPass === "") {
    error.loginPass = "Enter Password."
  } else if (!passRegex.test(values.loginPass)) {
    error.loginPass = "Incorrect Password."
  } else {
    error.loginPass = ""
  }



    return error
}

export default loginValidation