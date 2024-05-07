import { useState } from "react"
import { Table } from "./table"
import { Modal } from "./user"
import Sidebar from "./Sidebar"
import RightSection from "./Rightsection"
import "../../styles/table.css"

const Promos = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [rows, setRows] = useState([
    {
      promocode: "TTH01",
      description: "20% OFF ALL SEAT, ALL FLIGHTS!",
      status: "available",
    },
    {
      promocode: "TTH02",
      description: "50% OFF ONE WAY TRIP TO SINGAPORE",
      status: "expired",
    },
    {
      promocode: "TTH03",
      description: "50% DISCOUNT FOR 6 PACKS",
      status: "low",
    },
  ])
  const [rowToEdit, setRowToEdit] = useState(null)

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  }

  const handleEditRow = (idx) => {
    setRowToEdit(idx)

    setModalOpen(true)
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow

            return newRow
          })
        )
  }

  return (
      <>
      <div className="d-flex p-2">
        <Sidebar />
              <div className="d-flex flex-column table-container justify-content-start align-items-end">
          <Table
            rows={rows}
            deleteRow={handleDeleteRow}
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
