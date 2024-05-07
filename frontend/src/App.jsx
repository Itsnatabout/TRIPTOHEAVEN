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
import Admin from './components/admin/Dashboard';
import Promo from './components/admin/Promos'
import Flights from './components/admin/Flights';
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
  {
    path: "/dashboard",
    element: <Admin/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Promo",
    element: <Promo/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/flights",
    element: <Flights/>,
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

export default App
