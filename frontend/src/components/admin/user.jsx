import React, { useState } from "react"
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs"

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      PromoCode: "",
      description: "",
      statusID: "1",
    }
  )
  const [errors, setErrors] = useState("")
  const validateForm = () => {
    if (formState.PromoCode && formState.description && formState.statusID) {
      setErrors("")
      return true
    } else {
      let errorFields = []
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key)
        }
      }
      setErrors(errorFields.join(", "))
      return false
    }
  }

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    onSubmit(formState)

    closeModal()
  }







  return (
    <>
      <div
        className="modal"  style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)"}}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Promo
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Add your modal content here */}
              <form>
                <div className="form-group">
                  <label htmlFor="promocode">Promo Code</label>
                  <input
                    name="PromoCode"
                    onChange={handleChange}
                    value={formState.PromoCode}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    value={formState.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    name="statusID"
                    onChange={handleChange}
                    value={formState.statusID}
                  >
                    <option value="1">Available</option>
                    <option value="2">Expired</option>
                  </select>
                </div>
                {errors && (
                  <div className="error">{`Please Include: ${errors}`}</div>
                )}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
