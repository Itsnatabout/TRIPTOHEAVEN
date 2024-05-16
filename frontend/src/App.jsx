import './App.css';
import Login from './components/Login/LoginViewer'; 
import Signup from './components/Signup/SignupViewer';
import ManageBooking from './components/Manage-Booking/Manage';
import EditBooking from './components/Manage-Booking/EditBooking';
import Passengers from './components/Passenger-Info/PassengersViewer';
import Available from './components/AvailableFlights/AvailableFlights';
import Seat from './components/Seat/Seat';
import Payment from './components/Payment/Payment';
import Ticket from './components/Ticket';
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
    path: "/Booking/AvailableFlights",
    element: <Available/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Manage",
    element: <ManageBooking />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Manage/EditBooking",
    element: <EditBooking />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Booking/AvailableFlights/Passenger",
    element: <Passengers />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Booking/AvailableFlights/Passenger/Seat",
    element: <Seat />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Booking/AvailableFlights/Passenger/Seat/Payment",
    element: <Payment />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Booking/AvailableFlights/Passenger/Seat/Payment/Ticket",
    element: <Ticket />,
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



  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App;

//Manage-Booking/EditBooking
//Passenger-Info/Passengers
//Login/Login
//Signup-2/Signup
//AvailableFlights/AvailableFlights
/*import './App.css';
import Login from './components/Login/Login'; 

function App() {
  return(
    <div>
      <Login />
    </div>

  )
}

export default App;*/