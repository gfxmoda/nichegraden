import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { mobileLinks } from "../config/Links";

import Hamburger from "./Hamburger";
import Delivery from "./Delivery";
import Search from "./Search";

const MobileHeader = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartItemsCount = cartItems.reduce((acc, item) => item.qty + acc, 0);

  return (
    <div className="mobile-navbar">
      <div className="container">
        <div className="mobile-menu-btn">
          <Hamburger />
          <ul className="mobile-main-menu">
            <li className="mobile-main-menu-item">
              <Search type="mobile" />
            </li>
            <li className="mobile-main-menu-item">
              <Delivery />
            </li>
            {mobileLinks.map((link) => (
              <li className="mobile-main-menu-item" key={link}>
                <Link to={`/${link}`}>{link.split("-").join(" ")}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-mobile-overlay"></div>
        <Link to="/" className="logo" href="">
          <img src="/images/logo.png" alt="" />
        </Link>
        <div className="lang-n-cart">
          <Link to="/ar">
            <img src="/images/icon-util-globe.png" alt="" />
          </Link>
          <Link className="cart" to="/cart">
            <img src="/images/icon-util-cart.png" alt="" />
            <span className="cart-count">{cartItemsCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
