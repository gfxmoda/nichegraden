import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { mainLinks } from "../config/Links";

import Delivery from "./Delivery";
import NavControl from "./NavControl";
import MobileHeader from "./MobileHeader";

const MainHeader = () => {
  const main = "main";

  const [currentBG, setCurrentBG] = useState(`/images/landing-${main}.png`);

  const setBGHandler = (e) => {
    setCurrentBG(`/images/landing-${e.target.id}.png`);
  };

  useEffect(() => {}, [currentBG]);

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${currentBG})` }}>
      {/* <img className="navbar-bg" alt="" src={currentBG} /> */}
      <div className="navbar-overlay"></div>
      <div className="nav-container">
        <MobileHeader />
        <div className="nav-content">
          <Delivery />
          <NavControl />
        </div>
        <div className="main-links">
          <Link className="logo" to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
          <div className="container">
            <ul className="main-menu">
              {mainLinks.map((link) => (
                <li className="main-menu-item" key={link}>
                  <Link
                    id={link}
                    to={`/${link}`}
                    onMouseEnter={setBGHandler}
                    onMouseLeave={() =>
                      setCurrentBG(`/images/landing-${main}.png`)
                    }
                  >
                    {link.split("-").join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
