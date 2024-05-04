import React from 'react';

function Sidebar() {
    return (
        <aside>
            <div className="toggle">
                <div className="logo">
                    <img src="img/file.png" alt="logo" />
                    <h2>Trip to<span className="danger">Heaven</span></h2>
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
                    <h3>Dashboard</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        person_outline
                    </span>
                    <h3>Users</h3>
                </a>
                <a href="#">
                    <span className="material-icons-sharp">
                        token
                    </span>
                    <h3>Promo</h3>
                </a>
               
                <a href="#">
                    <span className="material-icons-sharp">
                        inventory
                    </span>
                    <h3>Sales</h3>
                </a>

                <a href="#">
                    <span className="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h3>Reports</h3>
                </a>
                
                <a href="#">
                    <span className="material-icons-sharp">
                        settings
                    </span>
                    <h3>Settings</h3>
                </a>
              
                <a href="#">
                    <span className="material-icons-sharp">
                        logout
                    </span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;