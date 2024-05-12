import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import RightSection from "./Rightsection";
import "../../styles/table.css";
import Modal from './modal';
import { BsFillPencilFill } from "react-icons/bs";

const Flights = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [flightDetails, setFlightDetails] = useState([]);
    const [timetable, setTimetable] = useState([]);
    const [airports, setAirports] = useState([]);
    const [status, setStatus] = useState([]);
    const [aircrafts, setAircrafts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [airportsResponse, aircraftsResponse, statusResponse, flightDetailsResponse, timetableResponse] = await Promise.all([
                    axios.get("http://localhost:5000/airports"),
                    axios.get("http://localhost:5000/aircrafts"),
                    axios.get("http://localhost:5000/flightstatus"),
                    // axios.get("http://localhost:5000/getFlights"),
                    // axios.get("http://localhost:5000/getFlightTime")
                ]);
                setAirports(airportsResponse.data);
                setAircrafts(aircraftsResponse.data);
                setStatus(statusResponse.data);
                // setFlightDetails(flightDetailsResponse.data);
                // setTimetable(timetableResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error appropriately, e.g., show a message to the user
            }
        };

        fetchData();
    }, [modalOpen]);

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
                                <tbody>
                                    {flightDetails.map((flight) => (
                                        <tr key={flight.flightID}>
                                            <td>{flight.flightID}</td>
                                            <td>{flight.aircraftID}</td>
                                            <td>{flight.availableSeats}</td>
                                            <td>{flight.departure}</td>
                                            <td>{flight.destination}</td>
                                            <td>{flight.status}</td>
                                            <td className="fit">
                                                <span className="actions">
                                                    <BsFillPencilFill className="edit-btn" onClick="" />
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
                                        <th>Departure Time</th>
                                        <th>Arrival Date</th>
                                        <th>Arrival Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {timetable.map((flight) => (
                                        <tr key={flight.flightID}>
                                            <td>{flight.flightID}</td>
                                            <td>{flight.departureDate}</td>
                                            <td>{flight.departureTime}</td>
                                            <td>{flight.arrivalDate}</td>
                                            <td>{flight.arrivalTime}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary mx-auto "
                        onClick={() => setModalOpen(true)}
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
                    />
                )}
                <RightSection />
            </div>
        </>
    );
};

export default Flights;
