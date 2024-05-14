import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"

const Book = ({ airport }) => {
  const [formData, setFormData] = useState({
    tripType: "return",
    selectedFromAirport: "",
    selectedToAirport: "",
    departureDate: "",
    returnDate: "",
    children: "",
    adults: "",
    seniors: "",
  });

  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); console.log(formData)
    // Format dates to be compatible with the database (YYYY-MM-DD)
    const formattedData = {
      ...formData,
      departureDate: new Date(formData.departureDate).toISOString().split("T")[0],
      returnDate: formData.tripType === "return" ? new Date(formData.returnDate).toISOString().split("T")[0] : null,
    };
    // Here you can send the formattedData to your backend using Axios
    axios.post("http://localhost:5000/searchflight", formattedData)
      .then((response) => {
        console.log("Form submitted successfully", response.data);
        navigate("/book/AvailableFlights")
        // Add any further actions after successful submission
      })
      .catch((error) => {
        console.error("Error submitting form", error);
        // Handle errors if any
      });
  };

  return (
    <>
      <section className="book" id="book">
        <h1 className="heading ">
          <span>B</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
          <span className="space"></span>
          <span>F</span>
          <span>l</span>
          <span>i</span>
          <span>g</span>
          <span>h</span>
          <span>t</span>
        </h1>
        <div className="custom-card shadow mb-5 bg-white rounded">
          <form className="card-body" onSubmit={handleSubmit}>
            <p className="custom-card-title text-center shadow mb-5 rounded">
              Travel Booking Form
            </p>

            <div className="icons text-center">
              <img
                src="./img/logotrip.png"
                alt="Your Image"
                style={{ width: "250px", height: "250px" }}
              />
            </div>

            <hr />

            <p className="searchText">
              <strong>SEARCH FOR AVAILABLE FLIGHTS</strong>
            </p>
            <div className="d-flex justify-content-center">
              <div className="container text-center align-items-center fs-4 mb-4">
                {/* Trip type selection */}
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    id="return"
                    value="return"
                    checked={formData.tripType == "return"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="return">
                    Return
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tripType"
                    id="oneWay"
                    value="oneWay"
                    checked={formData.tripType == "oneWay"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="oneWay">
                    One-Way
                  </label>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  {/* Departure airport selection */}
                  <select
                    className="form-select mb-4"
                    name="selectedFromAirport"
                    value={formData.selectedFromAirport}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      From
                    </option>
                    {airport.map((airport) => (
                      <option
                        key={airport.airportID}
                        value={airport.airportID}
                      >
                        {airport.municipality} ({airport.iata_code})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-sm-6">
                  {/* Destination airport selection */}
                  <select
                    className="form-select mb-4"
                    name="selectedToAirport"
                    value={formData.selectedToAirport}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      To
                    </option>
                    {airport.map((airport) => (
                      <option
                        key={airport.airportID}
                        value={airport.airportID}
                      >
                        {airport.municipality} ({airport.iata_code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  {/* Departure date input */}
                  <div className="input-group mb-4">
                    <span className="input-group-text">Depart</span>
                    <input
                      type="date"
                      className="form-control"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  {/* Return date input */}
                  <div className="input-group mb-4">
                    <span className="input-group-text">Return</span>
                    <input
                      type="date"
                      className="form-control"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      disabled={formData.tripType == "oneWay"}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                {/* Passenger selection */}
                <div className="col-sm-4">
                  <div className="mb-4">
                    <h3>Children (0-14)</h3>
                    <select
                      className="form-select"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="mb-4">
                    <h3>Adults (15-64)</h3>
                    <select
                      className="form-select"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="mb-4">
                    <h3>Seniors (65+)</h3>
                    <select
                      className="form-select"
                      name="seniors"
                      value={formData.seniors}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                {/* Submit button */}
                <div className="col-sm-6 text-center">
                  <button type="submit" className="btn btn-primary">
                    Search Flights
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Book;
