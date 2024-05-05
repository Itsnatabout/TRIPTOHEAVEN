import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Dashboard/Sidebar';
import MainContent from './Components/Dashboard/Maincontent';
import RightSection from './Components/Dashboard/Rightsection';

function App() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders([
            {
                destinationName: 'Singapore',
                flightNumber: '85743',
                flightDate: '11/15/2024',
                status: 'Cancelled',
                aircraftID: 'A123',
                type: 'Boeing 737',
                ETD: '09:00',
                ETA: '11:00',
                ATD: '09:30',
                ATA: '11:30',
                reason: 'Weather conditions',
            },
            {
                destinationName: 'Cebu City',
                flightNumber: '97245',
                flightDate: '6/10/2024',
                status: 'Delayed',
                aircraftID: 'B456',
                type: 'Airbus A320',
                ETD: '12:00',
                ETA: '14:00',
                ATD: '12:30',
                ATA: '14:30',
                reason: 'Mechanical issue',
            },
            {
                destinationName: 'Japan',
                flightNumber: '36452',
                flightDate: '4/11/2024',
                status: 'Departed',
                aircraftID: 'C789',
                type: 'Boeing 747',
                ETD: '15:00',
                ETA: '17:00',
                ATD: '15:30',
                ATA: '17:30',
                reason: '',
            },
        ]);
    }, []);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`container ${isDarkMode ? 'dark-mode-variables' : ''}`}>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent orders={orders} />
            <RightSection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div> 
    );
}

export default App;