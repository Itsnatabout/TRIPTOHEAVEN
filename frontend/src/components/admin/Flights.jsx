import React from "react"
import Sidebar from "./Sidebar"
import RightSection from "./Rightsection"
import "../../styles/table.css"

const Flights = () => {
  return (
    <>
      <div className="d-flex p-2" style={{ backgroundColor: "var(--color-background)" }}>
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
                <tbody>{/* data from database */}</tbody>
              </table>
            </div>
          </div>

          {/* for time table */}
          <div className="d-flex justify-content-center align-items-start h-50">
                      <div className="table-wrapper">
                          <h2>Timetable</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Flight ID</th>
                    <th>Departure Date</th>
                    <th>Departure Time</th>
                    <th>Arrival Date</th>
                    <th>Arrival Time</th>
                  </tr>
                </thead>
                <tbody>{/* data from database */}</tbody>
              </table>
            </div>
                  </div>
                  <button type="button" className="btn btn-primary mx-auto " style={{ position: "fixed", bottom: "3rem", right: "25rem",zIndex: "9999" }}>New Flight</button>
        </div>

        <RightSection />
      </div>
    </>
  )
}

export default Flights
