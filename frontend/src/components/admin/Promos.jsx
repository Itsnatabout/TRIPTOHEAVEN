import { useState,useEffect } from "react"
import { Table } from "./table"
import { Modal } from "./user"
import Sidebar from "./Sidebar"
import RightSection from "./Rightsection"
import "../../styles/table.css"
import axios from "axios"


const Promos = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [rows, setRows] = useState([])
  const [rowToEdit, setRowToEdit] = useState(null)
  const [mode, setMode] = useState("add"); // Track whether modal is in "add" or "edit" mode
  // const handleDeleteRow = (targetIndex) => {
  //   setRows(rows.filter((_, idx) => idx !== targetIndex))
  // }
  useEffect(() => {
   
      fetchData()
  }, [modalOpen])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/promos")
      setRows(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleEditRow = (idx) => {
    setRowToEdit(idx)
  setMode("edit"); // Set mode to "edit" when editing a row
    setModalOpen(true)
  }

  const handleSubmit = (newRow) => {

    if (mode === "add") {
      // If mode is "add", perform add operation
      axios.post("http://localhost:5000/addPromos", newRow)
        .then(() => {
          alert("Promo Added successfully!");
          fetchData(); // Refetch data after successful addition
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error
        });
    } else if (mode === "edit") {
      // If mode is "edit", perform update operation
      axios.post('http://localhost:5000/updatePromos', newRow)
        .then(() => {
          alert("Promo Updated successfully!");
          fetchData(); // Refetch data after successful update
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error
        });
    }

    setModalOpen(false);
    setRowToEdit(null);
    setMode("add"); // Reset mode to "add" after submission
  }




  return (
      <>
      <div className="d-flex p-2" style={{ backgroundColor: "var(--color-background)" }}>
        <Sidebar />
              <div className="d-flex flex-column table-container justify-content-start align-items-end">
          <Table
            rows={rows}
            // deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />
          <button
            onClick={() => setModalOpen(true)}
            className="btn btn-primary"
          >
            Add
          </button>
          {modalOpen && (
            <Modal
              closeModal={() => {
                setModalOpen(false)
                setRowToEdit(null)
              }}
              onSubmit={handleSubmit}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
          )}
        </div>
        <RightSection />
      </div>
    </>
  )
}

export default Promos
