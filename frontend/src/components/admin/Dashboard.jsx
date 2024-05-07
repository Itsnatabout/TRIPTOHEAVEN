import { useEffect, useState } from "react"
import '../../styles/admindash.css';
import Sidebar from "./Sidebar"
import MainContent from "./Maincontent"
import RightSection from "./Rightsection"

const Dashboard = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    setOrders([
      {
        destinationName: "Singapore",
        flightNumber: "85743",
        flightDate: "11/15/2024",
        status: "Cancelled",
      },
      {
        destinationName: "Cebu City",
        flightNumber: "97245",
        flightDate: "6/10/2024",
        status: "Delayed",
      },
      {
        destinationName: "Japan",
        flightNumber: "36452",
        flightDate: "4/11/2024",
        status: "Departed",
      },
    ])
  }, [])

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  return (
    <div className={`customcontainer admin ${isDarkMode ? "dark-mode-variables" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent orders={orders} />
      <RightSection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> 
    </div>
  )
}

export default Dashboard
