import Signup from './components/Signup';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Booking from './components/Booking';
import Packages from './components/Packages';
import Cebu from './components/places/Cebu';
import Boracay from './components/places/Boracay';
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

])
function App() {



  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
