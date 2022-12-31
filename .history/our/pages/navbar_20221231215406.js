import React from "react";
import navbar from "../styles/navbar";
const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">DevLHB</span>
      <div className="nav-items">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
