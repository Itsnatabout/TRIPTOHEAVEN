import React from 'react'
import '../../styles/Passengers.css' 

const Passengers = () => {
  return (
       <>
        <div className="nav" id='nav-passenger'>
            <div className='navContainer' id='navContainer-passenger'>
                <h1><span id='span3-passenger'>T</span>RIP TO HEAVEN</h1>
                <h3 style={{float:'right'}}><span id='span4-passenger'>₱</span> 15,000.00</h3>
            </div>
        </div>
            <div className='PictureContainer' id='PictureContainer-passenger'>
                <div className="Title text-center"><p id='Title1-passenger'><span id='span1-passenger'>P</span>assenger Informations</p></div>     
            </div>
            <div className="container" id='container-passenger'>
                <div className="row">
                    <div className="col-12 col-sm-8 col-md-6 m-auto">
                      <div className="card p-4" id='card-passenger'>
                         <div className="card-body" id='cardBody-passenger'>
                                <div className="Title text-center">
                                    <h1>PASSENGER <span id='span2-passenger'>#1</span></h1>
                                    
                                    </div>
                                    <form action="">
                                    <label id='label-passenger' htmlFor="title" className="form-label my-2">Title</label>
                                    <input type='text' name="title" id="RefNum" className="form-control  py-2" placeholder='e.g Mr./Ms./Mrs.' />  

                                    <label id='label-passenger' htmlFor="Fname" className="form-label my-2">First Name</label>
                                    <input type='text' name="Fname" id="Fname" className="form-control  py-2" placeholder='e.g John' />  

                                    <label id='label-passenger' htmlFor="Lname" className="form-label my-2">Last Name</label>
                                    <input type='text' name="Lname" id="Lname" className="form-control  py-2" placeholder='e.g Cena' />  

                                    <label id='label-passenger' htmlFor="bday" className="form-label my-2">Birth Date</label>
                                    <input type='date' name="bday" id="bday" className="form-control  py-2" /> 

                                    <label id='label-passenger' htmlFor="nationality" className="form-label my-2">Nationality</label>
                                    <input type="text" name="nationality" className="form-control  py-2" id="nationality"  placeholder='e.g American'/>
                                    <div className="ClassType">
                                        <label id='label-passenger' className="form-label my-2" style={{marginRight:'1vh'}}>Class Type:</label>
                                        <input type="radio"  name='radio' id='option1'/><label htmlFor="option1" style={{marginRight:'1vh'}}>Economy</label>
                                        <input type="radio"  name='radio' id='option2'/><label htmlFor="option2" style={{marginRight:'1vh'}}>Bussiness</label>
                                        <input type="radio"  name='radio' id='option3' /><label htmlFor="option3" style={{marginRight:'1vh'}}>First Class</label>             
                                    </div>

                                    <input type="checkbox" className="form-check-input" id="check"/>
                                    <label id='label-passenger' className="form-check-label" htmlFor="exampleCheck1">Auto fill</label>
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

export default Passengers
