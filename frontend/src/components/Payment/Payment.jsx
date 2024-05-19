import React, { useState, useEffect } from "react";
import "../../styles/Payment.css";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const [promoCode, setPromoCode] = useState("");
  const [paymentProof, setPaymentProof] = useState(null);
  const [booking, setBooking] = useState([]);
  const location = useLocation();
  const { addedData, fetchedPassengers } = location.state || {};
  const navigate = useNavigate();




  useEffect(() => {
    const fetchData = async () => {
      try {
        const passengerIDs =
          fetchedPassengers?.map((passenger) => passenger.passengerID) || [];

        if (passengerIDs.length === 0) {
          console.error("No passenger IDs available");
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/getpassBooking",
          { passengerIDs }
        );
        const formattedData = response.data.map((item) => ({
          ...item,
          Bookingdate: formatDateTime(item.Bookingdate),
          departDateTime: formatDateTime(item.departDateTime),
          arrivalDateTime: formatDateTime(item.arrivalDateTime),
        }));
        setBooking(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [fetchedPassengers]);

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleSubmit = async (e, skip) => {
    e.preventDefault();
    const currentDate = new Date();
    const currentTime = getCurrentTime(currentDate) // Format time as ISO string
    const currentDateFormatted = currentDate.toISOString().split('T')[0]; // Format date as ISO string and extract date part
    let status = 10

    if (!paymentProof && !skip) {
      alert("Please upload proof of payment.");
      return;
    } else if (skip) {
      status = booking[0].statusID
    }


    try {
      const data = {
        statusID: status,
        total: addedData.price * fetchedPassengers.length,
        currentTime: currentTime,
        currentDate: currentDateFormatted,
        payment: paymentProof
      };

      const response = await axios.post("http://localhost:5000/postPayment", { data });
      console.log("Success:", response.data);

      navigate("/");
    } catch (error) {
      console.error("Error payment flight:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPaymentProof(file);
  };


  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toISOString().replace("T", " ").split(".")[0];
  };
  const getCurrentTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};
  return (
    <>
      <Header />
      <div className="pictureContainer">
        <div className="Title1 text-center">
          <h1 id="Title1-payment">
            <span id="span1-payments">Payment</span>
          </h1>
          <p id="context-payment">
            Please proceed to your payment on Gcash by scanning
            <br />
            the QR code to complete your booking.
          </p>
        </div>
      </div>
      <div className="container" id="container-payment">
        <div className="row" id="row">
          <div className="col-12 col-sm-8 col-md-10 m-auto">
            <div className="card p-4" id="card-payment">
              <div className="card-body" id="cardBody-payment">
                <div className="booking-details">
                  <h2 className="text-center">
                    <span id="span2-payment">Booking</span> Details
                  </h2>
                  <p>
                    <span id="span1-payment">
                      <strong>From: </strong>
                    </span>
                    {addedData.departureName}
                  </p>
                  <p>
                    <span id="span1-payment">
                      <strong>To: </strong>
                    </span>
                    {addedData.destinationName}
                  </p>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Reference Number</th>
                        <th>Name</th>
                        <th>Seat No.</th>
                        <th>Departure Time</th>
                        <th>Arrival Time</th>
                        <th>Return Time</th>
                        <th>Date</th>
                        <th>Fare</th>
                      </tr>
                    </thead>
                    <tbody>
                      {booking.map((data, index) => (
                        <tr key={index}>
                          <td>{data.BookingID}</td>
                          <td>
                            {fetchedPassengers[index].firstName}{" "}
                            {fetchedPassengers[index].lastName}
                          </td>
                          <td>{data.seatno}</td>
                          <td>{data.departDateTime}</td>
                          <td>{data.arrivalDateTime}</td>
                          <td>{addedData.returnDate}</td>
                          <td>{data.Bookingdate}</td>
                          <td>{addedData.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br />
                  <div className="promo-code">
                    <label htmlFor="promoCode">Promo Code:</label>
                    <input
                      type="text"
                      id="promoCode"
                      value={promoCode}
                      onChange={handlePromoCodeChange}
                      required
                    />
                  </div>

                  <br />
                  <div className="transaction-summary">
                    <h3 className="text-center">
                      <span id="span2-payment">Summary</span> of Transaction
                    </h3>
                    <p>
                      <strong>Fare per Passenger:</strong> {addedData.price}
                    </p>
                    <p>
                      <strong>Passenger Quantity:</strong>{" "}
                      {fetchedPassengers.length}
                    </p>
                    <p>
                      <strong>Discount Percentage:</strong> {0}%
                    </p>
                    <p>
                      <strong>Total:</strong>{" "}
                      {addedData.price * fetchedPassengers.length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h1>SCAN HERE!</h1>
              </div>
              <div className="text-center">
                <img src="/images/qr.jpg" alt="" id="qr-payment" />
              </div>
              <div className="form-group">
                <label htmlFor="proofOfPayment">Proof of Payment:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="proofOfPayment"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  id="submit-payment"
                  onClick={(e) => handleSubmit(e, false)}
                >
                  Submit
                </button>
                <button
                  className="btn btn-primary"
                  id="skip-payment"
                  onClick={(e) => handleSubmit(e, true)}
                >
                  Skip For Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
