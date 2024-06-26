import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "./Sidebar"
import RightSection from "./Rightsection"
import "../../styles/table.css"
import Modal from "./modal"
import { BsFillPencilFill } from "react-icons/bs"

const Flights = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [flightDetails, setFlightDetails] = useState([])
  const [timetable, setTimetable] = useState([])
  const [airports, setAirports] = useState([])
  const [status, setStatus] = useState([])
  const [aircrafts, setAircrafts] = useState([])
  const [rowToEdit, setRowToEdit] = useState(null)
  const [mode, setMode] = useState("add"); 


  const handleEditRow = (idx) => {
    setRowToEdit(idx)
    setMode("edit"); // Set mode to "edit" when editing a row
    setModalOpen(true)
  }
  const fetchData = async () => {
    try {
      const [
        airportsResponse,
        aircraftsResponse,
        statusResponse,
        flightDetailsResponse,
        timetableResponse,
      ] = await Promise.all([
        axios.get("http://localhost:5000/airports"),
        axios.get("http://localhost:5000/aircrafts"),
        axios.get("http://localhost:5000/flightstatus"),
        axios.get("http://localhost:5000/getFlights"),
        axios.get("http://localhost:5000/getFlightTime"),
      ])
      setAirports(airportsResponse.data)
      setAircrafts(aircraftsResponse.data)
      setStatus(statusResponse.data)
      setFlightDetails(flightDetailsResponse.data)
      setTimetable(timetableResponse.data)
    } catch (error) {
      console.error("Error fetching data:", error)
      // Handle the error appropriately, e.g., show a message to the user
    }
  }

  useEffect(() => {
    
    fetchData()
  }, [modalOpen])

  return (
    <>
      <div
        className="d-flex p-2"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <Sidebar />
        <div className="d-flex flex-column table-container">
          <div className="d-flex justify-content-center align-items-start h-50">
            <div className="table-wrapper">
              <h2>Flight Details</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Flight ID</th>
                    <th>Aircraft ID</th>
                    <th>Available Seats</th>
                    <th>Departure</th>
                    <th>Destination</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {flightDetails.map((flight, idx) => (
                    <tr key={flight.FlightID}>
                      <td>{flight.FlightID}</td>
                      <td>{flight.Model}</td>
                      <td>{flight.availableSeats}</td>
                      <td>{flight.departureName}</td>
                      <td>{flight.destinationName}</td>
                      <td>{flight.status}</td>
                      <td className="fit">
                        <span className="actions">
                          <BsFillPencilFill className="edit-btn" onClick={() => handleEditRow(idx)} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-start h-50">
            <div className="table-wrapper">
              <h2>Timetable</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Flight ID</th>
                    <th>Departure Date</th>
                    <th>Arrival Date</th>
                    <th>Return Date</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((flight) => (
                    <tr key={flight.FlightID}>
                      <td>{flight.FlightID}</td>
                      <td>
                        {new Date(flight.departDateTime).toLocaleString()}
                      </td>
                      <td>
                        {new Date(flight.arrivalDateTime).toLocaleString()}
                      </td>
                      <td>
                        {flight.returnDateTime
                          ? new Date(flight.returnDateTime).toLocaleString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary mx-auto "
            onClick={() => { setModalOpen(true), setMode("add")}}
            style={{ position: "fixed", bottom: "3rem", right: "25rem" }}
          >
            New Flight
          </button>
        </div>
        {modalOpen && (
          <Modal
            isModalOpen={() => setModalOpen(false)}
            airports={airports}
            status={status}
            aircraft={aircrafts}
            title={mode}
            selectedRow={[flightDetails[rowToEdit], timetable[rowToEdit]]}
          />
        )}
        <RightSection />
      </div>
    </>
  )
}

export default Flights
