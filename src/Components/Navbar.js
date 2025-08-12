import React, { useState } from "react";
import "./Style/Navbar.css";
import logo from "./assets/logo.png";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="TravelEase" />
        </div>
      </div>

      <div className="navbar-right">
        <div className="sidebar-toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <button className="dark-mode-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className={`navbar-links-container ${isOpen ? "open" : ""}`}>
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#destinations">Destinations</a>
          </li>
          <li>
            <a href="#Tours">Tours</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#Contact">Contact Us</a>
          </li>
        </ul>

        <div className="navbar-btn">
          <button className="btn-sign">
            <a href="#contact">Sign In</a>
          </button>
          <button className="btn-book">
            <a href="#Book">Book Now</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;