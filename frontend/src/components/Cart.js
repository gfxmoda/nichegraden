import React from "react";
import { Link } from "react-router-dom";

import { FREE_SHIPPING_AMOUNT } from "../constants/cartConstants";

import Message from "./Message";
import CartItem from "./CartItem";

const Cart = ({ products }) => {
  const cartItemsCount = products.reduce((acc, item) => item.qty + acc, 0);

  const subtotal = products.reduce(
    (acc, item) => item.price * item.qty + acc,
    0
  );
  const shippingCost = subtotal > FREE_SHIPPING_AMOUNT ? 0 : 5;

  return (
    <div className="cart-body">
      <div className="container">
        <div className="cart-content">
          {products.length > 0 ? (
            <>
              <table className="product-list">
                <thead>
                  <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <CartItem product={product} key={product.product} />
                  ))}
                </tbody>
              </table>
              <table className="cart-info">
                <thead>
                  <tr>
                    <th className="subtotal">
                      <h4>cart totals</h4>
                      <span className="digits">
                        {products.length > 0
                          ? `(${cartItemsCount}) ${
                              cartItemsCount > 1 ? "items" : "item"
                            }`
                          : ""}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="subtotal">
                      <span>subtotal</span>
                      <span className="digits">
                        {subtotal > 0 ? `BHD ${subtotal.toFixed(3)}` : "-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="shipping">
                      <span>shipping</span>
                      <span className="digits">
                        {subtotal > 0 && shippingCost > 0
                          ? `BHD ${shippingCost.toFixed(3)}`
                          : "-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="total">
                      <span>total</span>
                      <span className="digits">
                        {subtotal > 0
                          ? `BHD ${(subtotal + shippingCost).toFixed(3)}`
                          : "-"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="coupon">
                      <span>coupon</span>
                      <input type="text" placeholder="Coupon code" />
                    </td>
                  </tr>
                  <tr>
                    <td className="proceed">
                      <Link to="/">
                        <button className="add-to-cart">apply coupon</button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="proceed">
                      <Link to="/checkout">
                        <button className="add-to-cart">
                          proceed to checkout
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <Message type="" body="No items added to the cart" width="100%" />
          )}
        </div>
        <Link to="/">
          <button className="add-to-cart">{`< continue shopping`}</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
