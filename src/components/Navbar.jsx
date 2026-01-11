import React from "react";
import { Link } from "react-router-dom";

import '../styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar glass-nav">
      <div className="navbar-logo">
        <Link to="/">Umair Ahmad<span className="dot"></span></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="mailto:ua16453@gmail.com" className="btn-contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;