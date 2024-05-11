import {useState} from 'react'

const modal = ({isModalOpen, title}) => {





  return (
    <>
      {/*modal  */}

      <div
          className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)"}}
          id="test"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Modal title {/*add here the title to dynamic change when edit or add */}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={isModalOpen}
                  aria-label="Close"
                ></button>
              </div>
                      <div className="modal-body">
                          {/* Modal body content */}
                          <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Aircraft</label>
        <select className="form-select" aria-label="Default select example">
          <option>Select an aircraft</option>
          <option value="email1@example.com">email1@example.com</option> {/** use options when getting aircrafts */}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Departure</label>
        <select className="form-select" aria-label="Default select example">
          <option>Select Departure</option>
          <option value="email1@example.com">email1@example.com</option> {/** use options when getting aircrafts */}
        </select>
    </div>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Destination</label>
        <select className="form-select" aria-label="Default select example">
          <option>Select Destination</option>
          <option value="email1@example.com">email1@example.com</option> {/** use options when getting aircrafts */}
        </select>
    </div>
    
    <div className="mb-3">
        <label htmlFor="" className="form-label">Status</label>
        <select className="form-select" aria-label="Default select example">
          <option>Select Status</option>
          <option value="boarding">Boarding</option>
                    <option value="in-flight">In-Flight</option>
                    <option value="delayed">Delayed</option>
                                      <option value="returning">Returning</option> {/** use options when getting aircrafts */}
                                      <option value="cancelled">Cancelled</option>
        </select>
      </div>

    </form>
                      
                      
                      
                      
                      </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={isModalOpen}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default modal
