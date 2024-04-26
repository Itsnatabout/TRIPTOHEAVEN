import { useState, useEffect } from "react"
import Axios from "axios"

const CheckLogin = () => {
  Axios.defaults.withCredentials = true
  const [loginStatus, setLoginStatus] = useState(null)

  useEffect(() => {
    Axios.get("http://localhost:5000/login")
      .then((response) => {
        if (response.data.user && response.data.user.length > 0) {
          setLoginStatus(response.data.user[0].username)
        } else {
          setLoginStatus(null)
        }
      })
      .catch((error) => {
        console.log(error)
        setLoginStatus(null) // Set login status to null on error
      })
  }, [])

  return loginStatus
}

export default CheckLogin
