import React, { useState } from 'react';
import '../../styles/Passengers.css' 


const Passengers = ({numAdults, onSubmit}) => {

    const [passengerData, setPassengerData] = useState(
        Array.from({ length: numAdults }, () => ({
          Fname: '',
          Lname: '',
          bday: '',
          nationality: '',
          classType: '',
        }))
      );
      const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedData = passengerData.map((data, i) =>
          i === index ? { ...data, [name]: value } : data
        );
        setPassengerData(updatedData);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(passengerData);
      };


  return (
      <><div className='PictureContainer' id='PictureContainer-passenger'>
      <div className="Title text-center">
        <p id='Title1-passenger'><span id='span1-passenger'>P</span>assenger Informations</p>
      </div>
    </div>
    <div className="container" id='container-passenger'>
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 m-auto">
          <div className="card p-4" id='card-passenger'>
            <div className="card-body" id='cardBody-passenger'>
              <form onSubmit={handleSubmit}>
                {Array.from({ length: numAdults }, (_, index) => (
                  <div key={index} className="form-group">
                    <div className="Title text-center">
                      <h1>PASSENGER <span id='span2-passenger'>#{index + 1}</span></h1>
                    </div>
                    <label id='label-passenger' htmlFor="Fname" className="form-label my-2">First Name</label>
                    <input
                      type='text'
                      name="Fname"
                      className="form-control py-2"
                      placeholder='e.g John'
                      value={passengerData[index].Fname}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <label id='label-passenger' htmlFor="Lname" className="form-label my-2">Last Name</label>
                    <input
                      type='text'
                      name="Lname"
                      className="form-control py-2"
                      placeholder='e.g Cena'
                      value={passengerData[index].Lname}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <label id='label-passenger' htmlFor="bday" className="form-label my-2">Birth Date</label>
                    <input
                      type='date'
                      name="bday"
                      className="form-control py-2"
                      value={passengerData[index].bday}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <label id='label-passenger' htmlFor="nationality" className="form-label my-2">Nationality</label>
                    <input
                      type="text"
                      name="nationality"
                      className="form-control py-2"
                      placeholder='e.g American'
                      value={passengerData[index].nationality}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <div className="ClassType">
                      <label id='label-passenger' className="form-label my-2" style={{ marginRight: '1vh' }}>Class Type:</label>
                      <input
                        type="radio"
                        name={`classType-${index}`}
                        id={`option1-${index}`}
                        value="Economy"
                        checked={passengerData[index].classType === 'Economy'}
                        onChange={(e) => handleChange(index, { target: { name: 'classType', value: 'Economy' } })}
                      />
                      <label htmlFor={`option1-${index}`} style={{ marginRight: '1vh' }}>Economy</label>
                      <input
                        type="radio"
                        name={`classType-${index}`}
                        id={`option2-${index}`}
                        value="Business"
                        checked={passengerData[index].classType === 'Business'}
                        onChange={(e) => handleChange(index, { target: { name: 'classType', value: 'Business' } })}
                      />
                      <label htmlFor={`option2-${index}`} style={{ marginRight: '1vh' }}>Business</label>
                      <input
                        type="radio"
                        name={`classType-${index}`}
                        id={`option3-${index}`}
                        value="First Class"
                        checked={passengerData[index].classType === 'First Class'}
                        onChange={(e) => handleChange(index, { target: { name: 'classType', value: 'First Class' } })}
                      />
                      <label htmlFor={`option3-${index}`} style={{ marginRight: '1vh' }}>First Class</label>
                    </div>
                  </div>
                ))}
                <div className="subContainer text-center">
                  <button className="btn btn-primary mt-3 my-2" type='submit'>Proceed</button>
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

export default Passengers
