import React from "react";
import ProductCard from "./ProductCard";

const FeaturedCollection = ({
  heading,
  copy,
  subheading,
  subcopy,
  products,
}) => {
  return (
    <div className="product-section featured-section">
      <div className="container">
        <div className="products-content">
          <h1 className="collection-heading">
            <span className="bar"></span>
            {heading}
          </h1>
          {copy && <p>{copy}</p>}
          <div className="featured-flex">
            <div className="featured-text">
              <h2 className="collection-subheading">
                <span className="bar"></span>
                {subheading}
              </h2>
              <p>{subcopy}</p>
            </div>
            <div className="product-collection featured-product-collection">
              {products !== undefined &&
                products.length > 0 &&
                products
                  .slice(0, 3)
                  .map((item) => <ProductCard product={item} key={item._id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
