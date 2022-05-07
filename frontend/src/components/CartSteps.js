import React from "react";

import { Link } from "react-router-dom";

const CartSteps = ({ one, two, three }) => {
  return (
    <div className="cart-steps">
      <div className="container">
        <div className="steps-content">
          <Link to={one ? "/cart" : "#"}>shopping cart</Link>
          <span>{">"}</span>
          <Link to={two ? "/checkout" : "#"}>checkout details</Link>
          <span>{">"}</span>
          <Link to={three ? "/order" : "#"}>order complete</Link>
        </div>
      </div>
    </div>
  );
};

export default CartSteps;
