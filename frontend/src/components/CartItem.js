import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { setCartItemQty, removeFromCart } from "../actions/cartActions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  let [counter, setCounter] = useState(product.qty);
  const increment = () => {
    if (product.countInStock > 0 && counter < product.countInStock) {
      setCounter(counter + 1);
    }
  };
  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    dispatch(setCartItemQty(product.product, counter));
  }, [dispatch, product.product, counter]);

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product.product));
  };

  return (
    <tr key={product.product}>
      <td className="product-cell">
        <button className="remove-from-cart" onClick={removeFromCartHandler}>
          x
        </button>
        <img
          className="cart-item-img"
          src={`/images/product-${product.brand
            .split(" ")
            .join("")
            .toLowerCase()}-${product.name
            .split(" ")
            .join("")
            .toLowerCase()}-1.png`}
          alt=""
        />
        <Link to={`/product/${product.product}`}>
          <div>
            {`${product.name} - ${product.size[product.size.length - 1]}`}
          </div>
          <div>{`brand: ${product.brand}`}</div>
        </Link>
      </td>
      <td className="cart-item-price">BHD {product.price.toFixed(3)}</td>
      <td>
        <div className="counter">
          <div className="counter-container">
            <input
              type="button"
              value="-"
              key="decrement"
              onClick={decrement}
            />
            <div className="num">{counter}</div>
            <input
              type="button"
              value="+"
              key="increment"
              onClick={increment}
            />
          </div>
        </div>
      </td>
      <td className="cart-item-total">
        BHD {(product.price * counter).toFixed(3)}
      </td>
    </tr>
  );
};

export default CartItem;
