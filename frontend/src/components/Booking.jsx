import { useState, useEffect } from "react"
import axios from "axios"
import Header from "./Header"
import Book from "./Book"
import { Link, useNavigate } from "react-router-dom"

const Booking = () => {
  const [airports, setAirports] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/airports")
        setAirports(response.data) // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching data:", error)
        // Handle the error appropriately, e.g., show a message to the user
      }
    }

    fetchData()
  }, []) 

  return (
    <>
      <Header />
      {/* Conditional rendering of Book component */}
      {airports.length > 0 && <Book airport={airports} />}
      {/* Show a loading indicator while data is being fetched */}
      {airports.length === 0 && <h1>Loading...</h1>}
      {/* note future nat:
       Edit this to have a better loading screen omg so lazy having only loading hahaah
          */}
    </>
  )
}

export default Booking
