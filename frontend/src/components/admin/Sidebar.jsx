import React, { useState, useEffect  } from "react";
import { Link, useLocation } from "react-router-dom";



function Sidebar() {

    const [selectedItem, setSelectedItem] = useState("Dashboard");
    const location = useLocation();
    
    useEffect(() => {
        const pathname = location.pathname;
        const selectedItemFromPath = pathname.substring(1);
        setSelectedItem(selectedItemFromPath.charAt(0).toUpperCase() + selectedItemFromPath.slice(1));
    }, [location]);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };


    return (
        <aside>
            <div className="toggle">
                <div className="logo">
                    {/* <img src="img/file.png" alt="logo" /> */}
                    <h3><b>Trip To<span className="danger"> Heaven</span></b></h3>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            <div className="sidebar" >
                <Link to="/dashboard" className={selectedItem === "Dashboard" ? "active" : ""} onClick={() => handleItemClick("Dashboard")}>
                    <span className="material-icons-sharp">
                        dashboard
                    </span>
                    <h6>Dashboard</h6>
                </Link>
                <Link to="/users" className={selectedItem === "Users" ? "active" : ""} onClick={() => handleItemClick("Users")}>
                    <span className="material-icons-sharp">
                        person_outline
                    </span>
                    <h6>Users</h6>
                </Link>
                <Link to="/promo" className={selectedItem === "Promo" ? "active" : ""} onClick={() => handleItemClick("Promo")}>
                    <span className="material-icons-sharp">
                        token
                    </span>
                    <h6>Promo</h6>
                </Link>
               
                <Link to="/sales" className={selectedItem === "Sales" ? "active" : ""} onClick={() => handleItemClick("Sales")}>
                    <span className="material-icons-sharp">
                        inventory
                    </span>
                    <h6>Sales</h6>
                </Link>

                <Link to="/flights" className={selectedItem === "Flights" ? "active" : ""} onClick={() => handleItemClick("Flights")}>
                    <span className="material-icons-sharp">
                        report_gmailerrorred
                    </span>
                    <h6>Flights</h6>
                </Link>
                
                <Link to="/settings" className={selectedItem === "Settings" ? "active" : ""} onClick={() => handleItemClick("Settings")}>
                    <span className="material-icons-sharp">
                        settings
                    </span>
                    <h6>Settings</h6>
                </Link>
              
                <Link to="/" >
                    <span className="material-icons-sharp">
                        logout
                    </span>
                    <h6>Logout</h6>
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;