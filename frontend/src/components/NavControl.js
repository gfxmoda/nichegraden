import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import Search from "./Search";

const NavControl = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const cartItemsCount = cartItems.reduce((acc, item) => item.qty + acc, 0);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (userInfo) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [userInfo, isLoggedIn]);

  return (
    <div className="nav-control">
      <div className="search-n-help">
        <Search type="general" />
        <Link to="/help-center">help center</Link>
      </div>
      <div className="account">
        <Link to="/account">{isLoggedIn ? "account" : "login/ register"}</Link>
        <Link to="/contact">contact</Link>
      </div>
      <div className="lang-n-cart">
        <Link to="/">
          <img src="/images/icon-util-globe.png" alt="" />
        </Link>
        <Link className="cart" to="/cart">
          <img src="/images/icon-util-cart.png" alt="" />
          <span className="cart-count">{cartItemsCount}</span>
        </Link>
      </div>
    </div>
  );
};

export default NavControl;
