import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../../styles/Calendar.css';

function RightSection() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };



    return (
        <div className="right-section">
            <div className="nav">
                <button id="menu-btn">
                    <span className="material-icons-sharp">
                        menu
                    </span>
                </button>
                <div className="dark-mode">
                    <span className="material-icons-sharp active">
                        light_mode
                    </span>
                    <span className="material-icons-sharp">
                        dark_mode
                    </span>
                </div>

                <div className="profile">
                    <div className="info">
                        <p className='mb-0'>Hey, <b>Nath</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src="/img/hasbullah.jpg" alt="profile" />
                    </div>
                </div>

            </div>
           

            <div className="calendar-container">
                <Calendar onChange={onChange} value={date} />
            </div>

            <div className="reminders">
                <div className="header">
                <span className="material-icons-sharp">
                        notifications_none
                    </span>
                    <h3 className='fs-3'>Reminders</h3>
                  
                </div>

                <div className="notification">
                    <div className="icon">
                        <span className="material-icons-sharp">
                            volume_up   
                        </span>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h5>System Maintenance</h5>
                            <small className="text-muted">
                                08:00 AM - 12:00 PM
                            </small>
                        </div>
                        <span className="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>

                <div className="notification deactive">
                    <div className="icon">
                        <span className="material-icons-sharp">
                            edit
                        </span>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h5>Add Upcoming Promos</h5>
                            <small className="text-muted">
                                08:00 AM - 12:00 PM
                            </small>
                        </div>
                        <span className="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>

                <div className="notification deactive">
                    <div className="icon">
                        <span className="material-icons-sharp">
                            edit
                        </span>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h5>Add Upcoming Promos</h5>
                            <small className="text-muted">
                                08:00 AM - 12:00 PM
                            </small>
                        </div>
                        <span className="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>

                <div className="notification add-reminder">
                    <div>
                        <span className="material-icons-sharp">
                            add
                        </span>
                        <h5>Add Reminder</h5>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default RightSection;