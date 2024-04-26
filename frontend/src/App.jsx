import { useState, useEffect } from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
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
  }
])
function App() {



  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
