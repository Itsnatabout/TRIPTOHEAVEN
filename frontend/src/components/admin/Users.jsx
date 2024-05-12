import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import RightSection from "./Rightsection"
import "../../styles/table.css"
import axios from "axios"
import { BsPersonFillLock , BsFillPencilFill, BsEyeFill } from "react-icons/bs"
import Modal from "./UserModal"


const Users = () => {
  const [values, setValues] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [rowToEdit, setRowToEdit] = useState(null)

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

  const handleEditRow = (idx) => {
    setRowToEdit(idx)

    setModalOpen(true)
  }

    
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
                  {values.map((value, idx) => (
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
                      <td>{
                        value.role == 1 ? ("User") : ("Admin")
                      
                      }</td>
                      <td>
                        <span className={`label label-${value.status}`}>
                          {value.status}
                        </span>
                      </td>{" "}
                      {/* status */}
                      <td className="fit">
                        <span className="actions">
                          <BsPersonFillLock  className="delete-btn" onClick="" />
                                  <BsFillPencilFill className="edit-btn" onClick={()=> handleEditRow(idx)} />
                              {/* <BsEyeFill onClick=""/>     */}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
              {modalOpen && (
                  <Modal
                  closeModal={() => {
                    setModalOpen(false)
            }}
                  userData={values[rowToEdit]}
                  />
        )}
        <RightSection />
      </div>
    </>
  )
}

export default Users
