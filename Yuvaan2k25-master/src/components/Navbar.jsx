import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className={`bars ${isOpen ? "active" : ""}`} onClick={toggleNavbar}>
        <span className="bar"></span>
      </div>

      {/* Circular Navbar */}
      <nav id="nav" className={`${isOpen ? "visible" : ""}`}>
        <ul>
          <li className="shape-circle circle-one">
            <a href="#">EventManagementTeam</a>
          </li>
          <li className="shape-circle circle-two">
            <a href="#">SponsorshipTeam</a>
          </li>
          <li className="shape-circle circle-three">
            <a href="#">MediaPublicityTeam</a>
          </li>
          <li className="shape-circle circle-five">
            <a href="#">PRTeam</a>
          </li>
          <li className="shape-circle circle-five">
            <a href="#">WCTeam </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
