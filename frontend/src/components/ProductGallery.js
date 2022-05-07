import React, { useState, useEffect } from "react";

const ProductGallery = ({ product }) => {
  const [current, setCurrent] = useState(1);
  const helper = [0, 0];

  const size = product.size;

  useEffect(() => {}, [current]);

  return (
    <>
      {product && product.brand && product.name && (
        <div className="product-gallery">
          <div className="product-thumbnails">
            {helper.map((item, index) => (
              <div className="img-container" key={index}>
                <button
                  style={{ padding: "0" }}
                  onClick={() => {
                    setCurrent(index + 1);
                  }}
                >
                  <img
                    src={`/images/product-${product.brand
                      .split(" ")
                      .join("")
                      .toLowerCase()}-${product.name
                      .split(" ")
                      .join("")
                      .toLowerCase()}-${index + 1}.png`}
                    alt=""
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="highlighted-img">
            <button>
              <img alt="" src="/images/icon-navy-heart.png" />
            </button>
            <span className="flask-size">
              {size ? product.size[product.size.length - 1] : ""}
            </span>
            <div className="product-img">
              <img
                src={`/images/product-${product.brand
                  .split(" ")
                  .join("")
                  .toLowerCase()}-${product.name
                  .split(" ")
                  .join("")
                  .toLowerCase()}-${current}.png`}
                alt=""
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGallery;
