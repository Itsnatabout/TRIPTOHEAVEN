import { useState, useEffect } from "react"
import axios from "axios"
import Sidebar from "./Sidebar"
import RightSection from "./Rightsection"
import "../../styles/table.css"

const Sales = () => {




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
                    <th>Booking ID</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Nationality</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                
                </tbody>
              </table>
            </div>
          </div>
        </div>






















        <RightSection />
      </div>
    </>
  )
}

export default Sales
