import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import RightSection from "./Rightsection";
import "../../styles/table.css";

const Sales = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getPayments");
        setValues(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(values);

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
              <h2>Sales</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Sales ID</th>
                    <th>Discount ID</th>
                    <th>Amount</th>
                    <th>Mode of Payment</th>
                    <th>Date and Time</th>
                    <th>Payment Proof</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {values.map((value, index) => (
                    <tr key={index}>
                      <td>{value.paymentID}</td>
                      <td>{value.discountID}</td>
                      <td>{value.Amount}</td>
                      <td>{value.mop}</td>
                      <td>{value.paydate} {value.paytime}</td>
                      <td>{value.payment_proof}</td>
                      <td>{value.statusID}</td>
                      <td></td>
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

export default Sales;
