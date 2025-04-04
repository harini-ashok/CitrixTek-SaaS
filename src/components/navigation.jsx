import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = (props) => {
  const location = useLocation(); // Get the current route
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu collapse

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            style={{"margin-top": "3rem"}}
            // data-toggle="collapse"
            // data-target="#bs-example-navbar-collapse-1"
            onClick={handleToggleMenu} // Toggle menu on button click
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand page-scroll" to="/">
            {props.data ? (
              <img src={props.data.logo} className="nav-logo" alt="Citrix Tek" />
            ) : (
              "loading"
            )}
          </Link>
        </div>

        <div
          className={`collapse navbar-collapse ${
            isMenuOpen ? "in" : ""
          }`} // Dynamically add 'in' class when menu is open
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li
              className={location.pathname === "/solutions" ? "active" : ""}
              onClick={handleLinkClick} // Close menu on link click
            >
              <Link to="/solutions">Solutions</Link>
            </li>
            <li
              className={location.pathname === "/services" ? "active" : ""}
              onClick={handleLinkClick} // Close menu on link click
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={location.pathname === "/about" ? "active" : ""}
              onClick={handleLinkClick} // Close menu on link click
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={location.pathname === "/testimonials" ? "active" : ""}
              onClick={handleLinkClick} // Close menu on link click
            >
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li
              className={location.pathname === "/casestudies" ? "active" : ""}
              onClick={handleLinkClick} // Close menu on link click
            >
              <Link to="/casestudies">Case-Studies</Link>
            </li>
            <li
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={handleLinkClick} // Close menu on link click
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};