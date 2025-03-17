import React from "react";
import { Link } from 'react-router-dom';


export const Navigation = (props) => {
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
          {props.data
            ? 
            <img src={props.data.logo} className="nav-logo" alt="Citrix Tek" />
            : "loading"}</Link>
          {/* <a className="navbar-brand page-scroll" href="/">
            Citrix Tek
          </a> */}
          {" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
            <Link to="/solutions">Solutions</Link>
              {/* <a href="#solutions" className="page-scroll">
                Solutions
              </a> */}
            </li>
            <li>
            <Link to="/services">Services</Link>
              {/* <a href="#services" className="page-scroll">
                Services
              </a> */}
            </li>
            <li>
            <Link to="/about">About</Link>
              {/* <a href="#about" className="page-scroll">
                About
              </a> */}
            </li>
            <li>
            <Link to="/testimonials">Testimonials</Link>
              {/* <a href="#testimonials" className="page-scroll">
                Testimonials
              </a> */}
            </li>
            <li>
              <Link to="/casestudies">Case-Studies</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
              {/* <a href="#contact" className="page-scroll">
                Contact
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
