import React, { useState } from 'react';
import './admindash.css';
import Calendar from 'react-calendar';
import './Calendar.css';

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
                        <p>Hey, <b>Nath</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src="src/img/file.png" alt="profile" />
                    </div>
                </div>

            </div>
           
            <div className="calendar-container">
                <Calendar onChange={onChange} value={date} />
            </div>

            <div className="reminders">
                <div className="header">
                    <h2>Notifications</h2>
                    <span className="material-icons-sharp">
                        notifications_none
                    </span>
                </div>

                <div className="notification">
                    <div className="icon">
                        <span className="material-icons-sharp">
                        airplanemode_active  
                        </span>
                    </div>
                    <div className="content">
        <div className="info">
            <h3>Delayed Flight</h3>
            <small className="text-muted">
                Reason: Weather conditions
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
            flight_land
        </span>
    </div>
    <div className="content">
        <div className="info">
            <h3>Arrival Update</h3>
            <small className="text-muted">
                ETA: 10:30 AM
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
                        <h3>Add Flight</h3>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default RightSection;