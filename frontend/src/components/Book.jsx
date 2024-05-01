import React from "react"
import axios from "axios"
import Header from "./Header"
import { Link, useNavigate } from "react-router-dom"

const Book = () => {
  return (
    <>
      <Header />
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
        <div className="custom-card shadow mb-5 bg-white rounded ">
          <form className="card-body">
            <p className="custom-card-title text-center shadow mb-5 rounded">
              Travel Booking Form
            </p>

            <div className="icons text-center">
              <img
                src="./img/logotrip.png"
                alt="Your Image"
                style={{ width: "250px", height: "250px" }} // Use an object here
              />
            </div>

            <hr />

            <p className="searchText">
              <strong>SEARCH FOR AVAILABLE FLIGHTS</strong>
            </p>
            <div className="d-flex justify-content-center">
              <div className="container text-center align-items-center fs-4 mb-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Return
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    One-Way
                  </label>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <select className="form-select mb-4" id="fromSelect">
                    <option value="" disabled selected>
                      From
                    </option>
                    <option value="1">Manila</option>
                    <option value="2">Mumbai</option>
                    <option value="3">Bangalore</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <select className="form-select mb-4" id="toSelect">
                    <option value="" disabled selected>
                      To
                    </option>
                    <option value="1">Japan</option>
                    <option value="2">China</option>
                    <option value="3">Singapore</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <div className="input-group mb-4">
                    <span className="input-group-text">Depart</span>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="input-group mb-4">
                    <span className="input-group-text">Return</span>
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <div className="mb-4">
                    <h3>Children (0-14)</h3>
                    <select className="form-select" id="childrenSelect">
                      <option value="" disabled selected>
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
                    <select className="form-select" id="adultsSelect">
                      <option value="" disabled selected>
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
                    <select className="form-select" id="seniorsSelect">
                      <option value="" disabled selected>
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
  )
}

export default Book
