import React from "react";
import { Link } from "react-router-dom";

import Delivery from "./Delivery";
import NavControl from "./NavControl";
import MobileHeader from "./MobileHeader";

import logo from "../logo.png";

const GeneralHeader = () => {

  return (
    <div className="general-navbar">
      <MobileHeader />
      <div className="nav-content">
        <Delivery />
        <Link className="logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <NavControl />
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="main-links">
          <ul className="main-menu">
            <li className="main-menu-item">
              <Link to="/for-him">
                <span className="bar"></span>for him
              </Link>
            </li>
            <li className="main-menu-item">
              <Link to="/for-her">
                <span className="bar"></span>for her
              </Link>
            </li>
            <li className="main-menu-item">
              <Link to="/unisex">
                <span className="bar"></span>unisex
              </Link>
            </li>
            <li className="main-menu-item">
              <Link to="/for-home">
                <span className="bar"></span>for home
              </Link>
            </li>
            <li className="main-menu-item">
              <Link to="/skin-care">
                <span className="bar"></span>skin care
              </Link>
            </li>
            <li className="main-menu-item">
              <Link to="/our-garden">
                <span className="bar"></span>our garden
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
