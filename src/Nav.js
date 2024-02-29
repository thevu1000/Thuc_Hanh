import "./styles.css";
import "./responsive.css";
import "./themify-icons.css";
import React from "react";
export default function Nav() {
  return (
    <nav className="navbar">
      {/* Navbar content */}
      <ul className="nav-item-container">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}
