import React from 'react'
import '../../styles/EditPassenger.css' 

const EditPassenger = () => {
  return (
    <>   
    <div className='PictureContainer'>
        <div className="Title text-center">
            <p id='Title1'><span id='span1'>Modify</span> Passenger</p>
            <p id='Title1'>Information</p>
        </div>     
    </div>
    <div className="container ">
    <div className="row">
      <div className="col-12 col-sm-8 col-md-6 m-auto">
        <div className="card p-4">
          <div className="card-body" id='cardBody'>
            <div className="Title text-center">
            <h1>PASSENGER <span id='span2'>#1</span></h1>
            </div>
            <form action="">
              <label htmlFor="title" className="form-label my-2">Title</label>
              <input type='text' name="title" id="RefNum" className="form-control  py-2" placeholder='e.g Mr./Ms./Mrs.' />  

              <label htmlFor="Fname" className="form-label my-2">First Name</label>
              <input type='text' name="Fname" id="Fname" className="form-control  py-2" placeholder='e.g John' />  

              <label htmlFor="Lname" className="form-label my-2">Last Name</label>
              <input type='text' name="Lname" id="Lname" className="form-control  py-2" placeholder='e.g Cena' />  

              <label htmlFor="bday" className="form-label my-2">Birth Date</label>
              <input type='date' name="bday" id="bday" className="form-control  py-2" /> 

              <label htmlFor="nationality" className="form-label my-2">Nationality</label>
              <input type="text" name="nationality" className="form-control  py-2" id="nationality"  placeholder='e.g American'/>

              <div className="subContainer text-center">               
                <button className="btn btn-primary mt-3 my-2" name='submit' id='submit'>Proceed</button>            
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default EditPassenger
