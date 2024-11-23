import {React, useState} from 'react'
import Profile from '../assets/profile.JPEG';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Profile} alt="Logo" />
      </div>
      <button
        className="menu-toggle"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul className={`navbar-items ${isOpen ? "visible" : "hidden"}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default NavBar
