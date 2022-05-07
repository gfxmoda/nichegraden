import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
  addToCart,
  addToWishList,
  removeFromWishList,
} from "../actions/cartActions";

const ProductCard = ({ product, wished, wishedLink }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1));
  };

  const addToWishListHandler = () => {
    dispatch(addToWishList(product._id));
  };

  const removeFromWishListHandler = () => {
    dispatch(removeFromWishList(product.product));
  };

  return (
    <>
      {product && product.brand && product.name && (
        <div className="product-card">
          {wished ? (
            <button
              onClick={removeFromWishListHandler}
              style={{
                fontFamily: "var(--var-frontage-reg)",
                color: "var(--var-color-ng-navy-blue)",
                zIndex: "1000",
              }}
            >
              X
            </button>
          ) : (
            <img
              className="add-to-wishlist"
              alt=""
              src="/images/icon-navy-heart.png"
              onClick={addToWishListHandler}
            />
          )}
          <div className="img-container">
            <div className="product-img-bg"></div>
            <img
              className="product-img"
              alt=""
              src={`/images/product-${product.brand
                .split(" ")
                .join("")
                .toLowerCase()}-${product.name
                .split(" ")
                .join("")
                .toLowerCase()}-1.png`}
            />
          </div>
          <div className="title-card">
            <div className="title-bg"></div>
            <div className="title-text">
              <h3 className="product-title">{product.name}</h3>
              <h3 className="product-price">BHD {product.price.toFixed(3)}</h3>
            </div>
          </div>
          <Link
            to={`/product/${wished ? wishedLink : product._id}`}
            className="product-container"
          ></Link>
          <input
            type="button"
            value={product.countInStock > 1 ? "add to cart" : "out of stock"}
            className="add-to-cart"
            onClick={addToCartHandler}
            disabled={product.countInStock < 1}
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;
