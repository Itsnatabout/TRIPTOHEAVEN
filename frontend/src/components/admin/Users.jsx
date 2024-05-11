import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import RightSection from "./Rightsection"
import "../../styles/table.css"
import axios from "axios"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"

const Users = () => {
  const [values, setValues] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users")
        setValues(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

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
              <h2>User Management</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* data from database */}
                  {values.map((value) => (
                    <tr
                      key={value.userID}
                      className={
                        value.status === "disabled" ? "disabled-row" : ""
                      }
                    >
                      <td>{value.userID}</td>
                      <td>{value.username}</td>
                      <td>
                        {value.firstname} {value.lastname}
                      </td>
                      <td>{value.email}</td>
                      <td>{value.role}</td>
                      <td>
                        <span className={`label label-${value.status}`}>
                          {value.status}
                        </span>
                      </td>{" "}
                      {/* status */}
                      <td className="fit">
                        <span className="actions">
                          <BsFillTrashFill className="delete-btn" onClick="" />
                          <BsFillPencilFill className="edit-btn" onClick="" />
                        </span>
                      </td>
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
  )
}

export default Users
