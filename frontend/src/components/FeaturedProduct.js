import React from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ product }) => {
  return (
    <>
      {product && product.brand && product.name && (
        <div className="hero">
          <div className="container">
            <div className="hero-card">
              <img
                className="hero-img"
                src={`/images/product-${product.brand
                  .split(" ")
                  .join("")
                  .toLowerCase()}-${product.name
                  .split(" ")
                  .join("")
                  .toLowerCase()}.png`}
                alt=""
              />
              <div className="hero-text">
                <h1 className="collection-heading">
                  <span className="bar"></span>
                  {product.name}
                </h1>
                {product.description.map((desc, index) => (
                  <p key={index}>{desc}</p>
                ))}
                <Link to={`/product/${product._id}`} className="learn-more">
                  {`learn more >`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProduct;

/** remaining > product */
