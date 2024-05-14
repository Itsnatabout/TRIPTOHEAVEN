import './App.css';
import Login from './components/Login/LoginViewer'; 
import Signup from './components/Signup/SignupViewer';
import ManageBooking from './components/Manage-Booking/Manage';
import EditBooking from './components/Manage-Booking/EditBooking';
import Passengers from './components/Passenger-Info/PassengersViewer';
import Available from './components/AvailableFlights/AvailableFlights';
import Seat from './components/Seat/Seat';
import Payment from './components/Payment/Payment';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Book from './components/Book';
import Packages from './components/Packages';
import Cebu from './components/places/Cebu';
import Boracay from './components/places/Boracay';
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
    path: "/book",
    element: <Book />,
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
    path: "/book/AvailableFlights",
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
    path: "/Book/AvailableFlights/Passenger",
    element: <Passengers />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Book/AvailableFlights/Passenger/Seat",
    element: <Seat />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Book/AvailableFlights/Passenger/Seat/Payment",
    element: <Payment />,
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