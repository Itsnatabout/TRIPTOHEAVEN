import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import CheckLogin from "./CheckLogin"
import { FaSearch } from "react-icons/fa"
import axios from "axios"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = CheckLogin()

  useEffect(() => {
    setIsLoggedIn(user !== null)
  }, [user])

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/logout")
      .then(() => {
        setIsLoggedIn(false) // Update local state to reflect logout
        alert("Successfully logged out")
      })
      .catch((error) => {
        console.error("Logout error:", error)
        // Handle logout error
      })
  }

  return (
    <header>
      {/* <div id="menu-bar" className="fas fa-bars"></div> */}

      {/* <h2>{user}</h2> */}
      <Link to="/" className="Link-no-decoration">
        <div className="logo">
          <a href="">
            <span>T</span>rip to Heaven
          </a>
        </div>
      </Link>

      <nav className="navbar">
        <Link to="/">
          <a href="">Home</a>
        </Link>
        <Link to="/booking">
          <a href="">Book</a>
        </Link>
        <Link to="/packages">
          <a href="#packages">Packages</a>
        </Link>
        <Link to="/Manage">
          <a href="#manage">Manage</a>
        </Link>
        <Link to="">
          <a href="#travel">Travel Info</a>
        </Link>
        <Link to="">
          <a href="#explore">Explore</a>
        </Link>
      </nav>

      <div className="icons">
        {/* <i className="fas fa-search" id="search-btn"></i>
        <i className="fas fa-user" id="login-btn"></i> */}
        <p>
          <FaSearch />
        </p>
        {isLoggedIn ? (
          <div className="user-info">
            <p>{user}</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        ) : (
          <Link to="/login" className="Link-no-decoration">
            <p>Login</p>
          </Link>
        )}
      </div>

      <form action="" className="search-bar-container">
        <input type="search" id="search-bar" placeholder="search" />
        <label htmlFor="search-bar" className="fas fa-search"></label>
      </form>
    </header>
  )
}

export default Header
