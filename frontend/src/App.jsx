// App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSection from './RightSection';

function App() {
    const [orders, setOrders] = useState([
        {
            destinationName: 'Singapore',
            flightNumber: '85743',
            flightDate: '11/15/2024',
            status: 'Cancelled'
        },
        // Other orders...
    ]);

    const toggleSidebar = () => {
        // Implement sidebar toggle logic here
    };

    const toggleDarkMode = () => {
        // Implement dark mode toggle logic here
    };

    return (
        <div className="container">
            <Sidebar toggleSidebar={toggleSidebar} />
            <MainContent orders={orders} />
            <RightSection toggleDarkMode={toggleDarkMode} />
        </div>
    );
}

export default App;