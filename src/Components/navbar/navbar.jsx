import React from "react";
import "./navbar.css";
import logo from "../Assests/rainbow.png";
import sublogo from "../Assests/logo.svg";

const navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="https://www.greetsu.com/">
          <img src={logo} alt="" className="header-img" />
        </a>
      </div>
      <div className="subcontainers">
        <div className="subcontainer-1">
          <div className="navbar-bold-text">
            <h1>Loveto</h1>
          </div>
          <div className="navbar-text"> Create your love timeline</div>
        </div>
        <div className="subcontainer-2">
          <p>Powered by</p>
          <div className="sub-img">
            <img src={sublogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
