import React from "react";

const ShowcaseSortSelection = ({ products }) => {
  return (
    <div className="product-sort">
      {products && products.length > 0 && (
        <>
          <span className="product-count">
            Showing (1–{products.length}) of {products.length} results
          </span>
          <span>sort products by</span>
          <select name="sort" className="sort" id="sort-handle" required>
            <option value="0" label="popularity"></option>
            <option value="1" label="rating"></option>
            <option value="2" label="latest" defaultValue></option>
            <option value="3" label="price: low to high"></option>
            <option value="4" label="price: high to low"></option>
          </select>
        </>
      )}
    </div>
  );
};

export default ShowcaseSortSelection;
