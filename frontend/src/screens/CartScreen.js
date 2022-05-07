import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import Cart from "../components/Cart";
import CartSteps from "../components/CartSteps";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div>
      <div className="cart-steps">
        <div className="container">
          <CartSteps one />
        </div>
      </div>
      <Cart products={cartItems} />
    </div>
  );
};

export default CartScreen;
