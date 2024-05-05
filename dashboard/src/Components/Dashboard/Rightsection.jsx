import React from 'react';
import './admindash.css';

function RightSection() {
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
           

            <div className="user-profile">
                <div className="logo">
                    <img src="src/img/file.png" alt="logo" />
                    <h2>Trip to Heaven</h2>
                    <p>Fly High Butterfly</p>
                </div>
            </div>

            <div className="reminders">
                <div className="header">
                    <h2>Reminders</h2>
                    <span className="material-icons-sharp">
                        notifications_none
                    </span>
                </div>

                <div className="notification">
                    <div className="icon">
                        <span className="material-icons-sharp">
                            volume_up   
                        </span>
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>System Maintenance</h3>
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
                            <h3>Add Upcoming Promos</h3>
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
                            <h3>Add Upcoming Promos</h3>
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
                        <h3>Add Reminder</h3>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default RightSection;