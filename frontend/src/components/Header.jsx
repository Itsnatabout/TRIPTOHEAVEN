import React from 'react'

const Header = () => {
  return (
    <header>

    <div id="menu-bar" className="fas fa-bars"></div>


    <a href="#" className="logo"><span>T</span>rip to Heaven</a>
	<nav className="navbar">
		<a href="#home">Home</a>
		<a href="#book">Book</a>
		<a href="#packages">Packages</a>
		<a href="#manage">Manage</a>
		<a href="#travel">Travel Info</a>
		<a href="#explore">Explore</a>
</nav>

    <div className="icons">
        <i className="fas fa-search" id="search-btn"></i>
        <i className="fas fa-user" id="login-btn"></i>
    </div>

    <form action="" className="search-bar-container">
        <input type="search" id="search-bar" placeholder="search"/>
        <label htmlFor="search-bar" className="fas fa-search"></label>
    </form>
</header>
  )
}

export default Header
