import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = (props) => {
  const location = useLocation(); // Get the current route

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
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
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li className={location.pathname === "/solutions" ? "active" : ""}>
              <Link to="/solutions">Solutions</Link>
            </li>
            <li className={location.pathname === "/services" ? "active" : ""}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li
              className={location.pathname === "/testimonials" ? "active" : ""}
            >
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li
              className={location.pathname === "/casestudies" ? "active" : ""}
            >
              <Link to="/casestudies">Case-Studies</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};