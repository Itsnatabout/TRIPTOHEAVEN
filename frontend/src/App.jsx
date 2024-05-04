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

        {
          destinationName: 'Cebu City',
          flightNumber: '97245',
          flightDate: '6/10/2024',
          status: 'Delayed'
      },
      {
          destinationName: 'Japan',
          flightNumber: '36452',
          flightDate: '4/11/2024',
          status: 'Departed'
      },
   
    ]);

    const toggleSidebar = () => {
      menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    });
    
    };

    const toggleDarkMode = () => {
      darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode-variables');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    })
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