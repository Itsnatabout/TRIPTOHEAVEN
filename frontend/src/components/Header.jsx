import {useState, useEffect} from "react"
import CheckLogin from "./CheckLogin"
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = CheckLogin()

  useEffect(() => { 

    setIsLoggedIn(user !== null);
  }, [user])

  return (
    <header>
      {/* <div id="menu-bar" className="fas fa-bars"></div> */}

      {/* <h2>{user}</h2> */}
      <div className="logo">
        <a href="#">
          <span>T</span>rip to Heaven
        </a>
      </div>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#book">Book</a>
        <a href="#packages">Packages</a>
        <a href="#manage">Manage</a>
        <a href="#travel">Travel Info</a>
        <a href="#explore">Explore</a>
      </nav>

      <div className="icons">
        {/* <i className="fas fa-search" id="search-btn"></i>
        <i className="fas fa-user" id="login-btn"></i> */}
        <p><FaSearch /></p>
        {isLoggedIn ? (<p>{user}</p>)
        : (<p>Login</p>)}
        
      </div>

      <form action="" className="search-bar-container">
        <input type="search" id="search-bar" placeholder="search" />
        <label htmlFor="search-bar" className="fas fa-search"></label>
      </form>
    </header>
  )
}

export default Header
