<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Dashboard/Sidebar';
import MainContent from './Components/Dashboard/Maincontent';
import RightSection from './Components/Dashboard/Rightsection';

=======
import Signup from './components/Signup';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Booking from './components/Booking';
import Packages from './components/Packages';
import Cebu from './components/places/Cebu';
import Boracay from './components/places/Boracay';
import Palawan from './components/places/Palawan';
import Siargao from './components/places/Siargao';
import Bohol from './components/places/Bohol';
import Albay from './components/places/Albay';
>>>>>>> 89c3f8523f649758f1dc66dac68ab62c87a71ffd


import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/booking",
    element: <Booking />,
    errorElement: <ErrorPage />
  },
  {
    path: "/packages",
    element: <Packages />,
    errorElement: <ErrorPage />
  },
  {
    path: "/packages/Cebu",
    element: <Cebu/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/packages/Boracay",
    element: <Boracay/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/packages/Palawan",
    element: <Palawan/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/packages/Siargao",
    element: <Siargao/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/packages/Bohol",
    element: <Bohol/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/packages/Albay",
    element: <Albay/>,
    errorElement: <ErrorPage />
  },
])
function App() {
    const [orders, setOrders] = useState([]);

<<<<<<< HEAD
    useEffect(() => {
        setOrders([
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
=======


  return (
    <>
       <RouterProvider router={router} />
    </>
  )
>>>>>>> 89c3f8523f649758f1dc66dac68ab62c87a71ffd
}

export default App;