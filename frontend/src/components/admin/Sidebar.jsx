import React from 'react';
function Sidebar() {
    return (
        <aside>
            <div className="toggle">
                <div className="logo">
                    {/* <img src="img/file.png" alt="logo" /> */}
                    <h3>Trip to<span className="danger"> Heaven</span></h3>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div className="sidebar">
                <a href="#" className="active">
                    <span className="material-icons-sharp">
                        dashboard
                    </span>
                    <h6>Dashboard</h6>
                </a>
                <a href="#" >
                    <span className="material-icons-sharp">
                        person_outline
                    </span>
                    <h6>Users</h6>
                </a>
                <a href="#" >
                    <span className="material-icons-sharp">
                        token
                    </span>
                    <h6>Promo</h6>
                </a>
               
                <a href="#" >
                    <span className="material-icons-sharp">
                        inventory
                    </span>
                    <h6>Sales</h6>
                </a>

                <a href="#">
                    <span className="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h6>Flights</h6>
                </a>
                
                <a href="#">
                    <span className="material-icons-sharp">
                        settings
                    </span>
                    <h6>Settings</h6>
                </a>
              
                <a href="#">
                    <span className="material-icons-sharp">
                        logout
                    </span>
                    <h6>Logout</h6>
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;