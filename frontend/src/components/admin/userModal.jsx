import React from "react"

const userModal = ({closeModal, title}) => {
  return (
    <>
      {/*modal  */}

      <div
        className="modal"
        style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
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
                Modal title{" "}
                {/*add here the title to dynamic change when edit or add */}
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Modal body content */}
              <form>
                <div className="mb-3 row">
                  <label htmlFor="" className="">
                    UserID
                  </label>
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    id="staticEmail2"
                    value=""
                  />
                              </div>
                              
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>

                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                                  />
                                  
                              </div>
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Gender
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>

                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    DateofBirth
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Role
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>
                              <div className="mb-3 row">
                  <label htmlFor="" className="">
                    Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    value=""
                  />
                              </div>

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

export default userModal
