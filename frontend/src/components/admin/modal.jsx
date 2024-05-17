import React, { useState, useEffect } from "react"
import axios from "axios"

const Modal = ({ isModalOpen, title, airports, aircraft, status }) => {
  const [flightType, setFlightType] = useState("oneWay")
  const [selectedFromAirport, setSelectedFromAirport] = useState("")
  const [selectedToAirport, setSelectedToAirport] = useState("")
  const [departureDateTime, setDepartureDateTime] = useState("")
  const [returnDateTime, setReturnDateTime] = useState("")
  const [selectedAircraft, setSelectedAircraft] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("")
  const [arrTime, setArrTime] = useState(null)
  const [departureGate, setDepartureGate] = useState(null)
  const [arrivalGate, setArrivalGate] = useState(null)
  const handleFlightTypeChange = (e) => {
    setFlightType(e.target.value)
  }

  const handleFromAirportChange = (e) => {
    const selectedAirport = e.target.value
    setSelectedFromAirport(selectedAirport)
    if (selectedToAirport === selectedAirport) {
      setSelectedToAirport("")
    }
  }

  const handleToAirportChange = (e) => {
    const selectedAirport = e.target.value
    setSelectedToAirport(selectedAirport)
    if (selectedFromAirport === selectedAirport) {
      setSelectedFromAirport("")
    }
  }

  useEffect(() => {
    // Function to generate a random terminal number and gate code for departure
    const generateDepartureGate = () => {
      const terminalNumber = Math.floor(Math.random() * 10) + 1
      const gateCode =
        String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
        (Math.floor(Math.random() * 50) + 1)
      return { terminalNumber, gateCode }
    }

    // Function to generate a random terminal number and gate code for arrival
    const generateArrivalGate = () => {
      const terminalNumber = Math.floor(Math.random() * 10) + 1
      const gateCode =
        String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
        (Math.floor(Math.random() * 50) + 1)
      return { terminalNumber, gateCode }
    }

    const addRandomTime = (departureDateTime) => {
      // Convert departureDateTime to a Date object
      const departureDate = new Date(departureDateTime);
    
      // Generate a random number between 1 to 3 for the hours
      const randomHours = Math.floor(Math.random() * 3) + 1;
    
      // Calculate the total hours including random hours
      const totalHours = departureDate.getHours() + randomHours;
    
      // Adjust date if total hours exceed 24
      if (totalHours >= 24) {
        // Add an extra day
        departureDate.setDate(departureDate.getDate() + 1);
      }
    
      // Add randomHours to departureDate
      departureDate.setHours(totalHours % 24);
    
      // Format the datetime string in 'YYYY-MM-DD HH:MM:SS' format
      const year = departureDate.getFullYear();
      const month = ('0' + (departureDate.getMonth() + 1)).slice(-2);
      const day = ('0' + departureDate.getDate()).slice(-2);
      const hours = ('0' + departureDate.getHours()).slice(-2);
      const minutes = ('0' + departureDate.getMinutes()).slice(-2);
      const seconds = ('0' + departureDate.getSeconds()).slice(-2);
    
      // Construct formatted datetime string
      const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
      // Return the formatted datetime string
      return formattedDateTime;
    };
    

    if (isModalOpen) {
      // Example usage
      const newTime = addRandomTime(departureDateTime)
      const departure = generateDepartureGate()
      const arrival = generateArrivalGate()
      setArrTime(newTime)
      setDepartureGate(departure)
      setArrivalGate(arrival)
    }
  }, [isModalOpen, departureDateTime])

  const handleSubmit = (e) => {
    e.preventDefault()

    const selectedAircraftObj = aircraft.find(
      (aircraft) => aircraft.aircraftID == selectedAircraft
    )
    const seatCapacity = selectedAircraftObj
      ? selectedAircraftObj.seatcapacity
      : null

    if (
      selectedFromAirport &&
      selectedToAirport &&
      departureDateTime &&
      selectedAircraft &&
      selectedStatus
    ) {
      // All required fields are filled
      // Send data to backend
      axios
        .post("http://localhost:5000/addflight", {
          from: selectedFromAirport,
          to: selectedToAirport,
          departureDateTime,
          returnDateTime: flightType === "roundTrip" ? returnDateTime : null,
          arrivalDateTime: arrTime,
          aircraft: selectedAircraft,
          seat: seatCapacity,
          status: selectedStatus,
          depterminal: departureGate.terminalNumber,
          depgate: departureGate.gateCode,
          arrterminal: arrivalGate.terminalNumber,
          arrgate: arrivalGate.gateCode,
        })
        .then((response) => {
          // Handle success
          isModalOpen()
          console.log("Flight data submitted successfully:", response.data)
        })
        .catch((error) => {
          // Handle error
          console.error("Error submitting flight data:", error)
        })
    } else {
      // Validation failed
      alert("Please fill in all required fields.")
    }
  }

  return (
    <>
      {isModalOpen && (
        <div
          className="modal"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          id="test"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {title}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={isModalOpen}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Flight Type
                    </label>
                    <select
                      className="form-select"
                      value={flightType}
                      onChange={handleFlightTypeChange}
                    >
                      <option value="oneWay">One-way</option>
                      <option value="roundTrip">Round-trip</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Aircraft
                    </label>
                    <select
                      className="form-select"
                      value={selectedAircraft}
                      onChange={(e) => setSelectedAircraft(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Aircraft
                      </option>
                      {aircraft.map((aircraft) => (
                        <option
                          key={aircraft.aircraftID}
                          value={aircraft.aircraftID}
                        >
                          {aircraft.Model} (capacity: {aircraft.seatcapacity})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Departure
                    </label>
                    <select
                      className="form-select"
                      value={selectedFromAirport}
                      onChange={handleFromAirportChange}
                    >
                      <option value="" disabled>
                        From
                      </option>
                      {airports.map((airport) => (
                        <option
                          key={airport.airportID}
                          value={airport.airportID}
                          disabled={selectedToAirport == airport.airportID}
                        >
                          {airport.municipality} ({airport.iata_code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="departureDateTime" className="form-label">
                      Departure Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      id="departureDateTime"
                      className="form-control"
                      value={departureDateTime}
                      onChange={(e) => setDepartureDateTime(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Destination
                    </label>
                    <select
                      className="form-select"
                      value={selectedToAirport}
                      onChange={handleToAirportChange}
                    >
                      <option value="" disabled>
                        To
                      </option>
                      {airports.map((airport) => (
                        <option
                          key={airport.airportID}
                          value={airport.airportID}
                          disabled={selectedFromAirport == airport.airportID}
                        >
                          {airport.municipality} ({airport.iata_code})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="returnDateTime" className="form-label">
                      Return Date and Time
                    </label>
                    <input
                      type="datetime-local"
                      id="returnDateTime"
                      className="form-control"
                      value={returnDateTime}
                      onChange={(e) => setReturnDateTime(e.target.value)}
                      disabled={flightType === "oneWay"}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-select"
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Status
                      </option>
                      {status.map((status) => (
                        <option key={status.statusID} value={status.statusID}>
                          {status.status}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={isModalOpen}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
