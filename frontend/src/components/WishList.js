import React from "react";

import ProductCard from "./ProductCard";

const WishList = ({ wishlist }) => {
  console.log(wishlist);
  return (
    <div className="wishlist">
      {wishlist.map((product) => (
        <ProductCard
          key={product.product}
          product={product}
          wished={true}
          wishedLink={product.product}
        />
      ))}
    </div>
  );
};

export default WishList;
