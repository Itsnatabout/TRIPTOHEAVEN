import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import RightSection from "./Rightsection";
import "../../styles/table.css";

const ListBooking = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getbookings");
        setValues(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
              <h2>Bookings</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Flight ID</th>
                    <th>Name</th>
                    <th>Class Type</th>
                    <th>Seat No.</th>
                    <th>Status</th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {values.map((booking) => (
                    <tr key={booking.BookingID}>
                      <td>{booking.BookingID}</td>
                      <td>{booking.flightID}</td>
                      <td>{booking.firstName} {booking.lastName}</td>
                      <td>{booking.ClassType}</td>
                      <td>{booking.seatno}</td>
                      <td>{booking.status}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <RightSection />
      </div>
    </>
  );
};

export default ListBooking;
