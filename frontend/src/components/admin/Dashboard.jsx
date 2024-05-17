import { useEffect, useState } from "react"
import '../../styles/admindash.css';
import Sidebar from "./Sidebar"
import MainContent from "./Maincontent"
import RightSection from "./Rightsection"
import axios from "axios";



const Dashboard = () => {
  const [flights, setFlights] = useState([])
  const [users, setUsers] = useState([])
  const [userCount, setUserCount] = useState(0);
  const [percentage, setPercentage] = useState(0);

 // Fetch data asynchronously using Axios
 const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
   }
};

  // Function to count the number of users
  const countUsers = () => {
    return users.length;
  };
  // Function to calculate the percentage
  const calculatePercentage = () => {
    const quotaPerDay = 10; // Change this to your quota per day
    const count = countUsers();
    return Math.min((count / quotaPerDay) * 100, 100); // Ensure percentage doesn't exceed 100%
  };
 // Function to reset the percentage at the beginning of each day
 const resetPercentage = () => {
  setPercentage(0);
  };
  

  useEffect(() => {
    fetchUsers();
  }, [])

  useEffect(() => {
    // Update user count whenever user data changes
    setUserCount(countUsers());
    setPercentage(calculatePercentage());

      // Check for a new day every hour and reset the percentage
      const interval = setInterval(() => {
        const currentDate = new Date();
        if (currentDate.getHours() === 0) {
          resetPercentage();
        }
      }, 3600000); // Check every hour for a new day

    return () => clearInterval(interval); // Cleanup interval on component unmount

  }, [users]);







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
      <MainContent orders={flights} userCount={userCount} userPercent={percentage} />
      <RightSection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> 
    </div>
  )
}

export default Dashboard
