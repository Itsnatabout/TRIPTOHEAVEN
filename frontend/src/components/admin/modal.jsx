import React, { useState } from "react";

const Modal = ({ isModalOpen, title, airports, aircraft, status }) => {
  const [flightType, setFlightType] = useState("oneWay");
  const [selectedFromAirport, setSelectedFromAirport] = useState("");
  const [selectedToAirport, setSelectedToAirport] = useState("");

  const handleFlightTypeChange = (e) => {
    setFlightType(e.target.value);
  };

  const handleFromAirportChange = (e) => {
    const selectedAirport = e.target.value;
    setSelectedFromAirport(selectedAirport);

    // Disable the corresponding option in the "To" selection field if it's selected in the "From" selection field
    if (selectedToAirport === selectedAirport) {
      setSelectedToAirport("");
    }
  };

  const handleToAirportChange = (e) => {
    const selectedAirport = e.target.value;
    setSelectedToAirport(selectedAirport);

    // Disable the corresponding option in the "From" selection field if it's selected in the "To" selection field
    if (selectedFromAirport === selectedAirport) {
      setSelectedFromAirport("");
    }
  };

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
                <form>
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
                    <select className="form-select">
                      <option value="" disabled selected>
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
                      aria-label="Default select example"
                      value={selectedFromAirport}
                      onChange={handleFromAirportChange}
                    >
                      <option value="" disabled selected>
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
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Destination
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={selectedToAirport}
                      onChange={handleToAirportChange}
                    >
                      <option value="" disabled selected>
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
                      disabled={flightType === "oneWay"}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Status
                    </label>
                    <select className="form-select" aria-label="Default select example">
                      <option value="" disabled selected>
                        Select Status
                      </option>
                      {/* Options for status */}
                      {status.map((status) => (
                        <option key={status.statusID} value={status.status}>
                          {status.status}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={isModalOpen}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
