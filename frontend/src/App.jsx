import Signup from './components/Signup';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Book from './components/Book';
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

export default App
