import React from "react";
import ProductCard from "./ProductCard";

const Collection = ({ heading, copy, textColor, bgColor, products }) => {
  return (
    <div className="product-section" style={{ backgroundColor: `${bgColor}` }}>
      <div className="container">
        <div className="products-content">
          <h1 className="collection-heading" style={{ color: `${textColor}` }}>
            <span className="bar"></span>
            {heading}
          </h1>
          {copy && <p>{copy}</p>}
          <div className="product-collection">
            {products !== undefined &&
              products.length > 0 &&
              products
                .slice(0, 4)
                .map((item) => <ProductCard product={item} key={item._id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
