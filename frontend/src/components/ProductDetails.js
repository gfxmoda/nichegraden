import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// import ProductGallery from "./ProductGallery";

import Rating from "./Rating";
import Review from "./Review";
import SendEmail from "./SendEmail";
import WriteReview from "./WriteReview";

import { addToCart, addToWishList } from "../actions/cartActions";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  // const helper = [0, 0];

  useEffect(() => {}, [current]);

  let [counter, setCounter] = useState(1);

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

  const category = product.category;
  const ingredients = product.ingredients;
  const keyNotes = product.keyNotes;
  const mainAccords = product.mainAccords;
  const reviews = product.reviews;
  const size = product.size;

  useEffect(() => {}, [counter]);

  const addToWishListHandler = () => {
    dispatch(addToWishList(product._id));
  };

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, counter));
  };

  return (
    <>
      {product && product.brand && product.name && (
        <div className="product-info">
          <div className="product-details-container">
            <div
              className="product-hero"
              style={{
                backgroundImage: `url(/images/product-${product.brand
                  .split(" ")
                  .join("")
                  .toLowerCase()}-${product.name
                  .split(" ")
                  .join("")
                  .toLowerCase()}-hero.jpg)`,
              }}
            ></div>
            <div className="product-details">
              {/* <ProductGallery product={product} /> */}
              {product && product.brand && product.name && (
                <div className="product-gallery">
                  <div className="product-thumbnails">
                    {/* {helper.map((item, index) => (
                      <div className="img-container" key={index}>
                        <img
                          onClick={() => {
                            setCurrent(index + 1);
                          }}
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
                      </div>
                    ))} */}
                    <div className="img-container">
                      <img
                        onClick={() => {
                          setCurrent(1);
                        }}
                        src={`/images/product-${product.brand
                          .split(" ")
                          .join("")
                          .toLowerCase()}-${product.name
                          .split(" ")
                          .join("")
                          .toLowerCase()}-1.png`}
                        alt=""
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                      />
                    </div>
                    <div className="img-container">
                      <img
                        onClick={() => {
                          setCurrent(2);
                        }}
                        src={`/images/product-${product.brand
                          .split(" ")
                          .join("")
                          .toLowerCase()}-${product.name
                          .split(" ")
                          .join("")
                          .toLowerCase()}-2.png`}
                        alt=""
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="highlighted-img">
                    <img
                      className="add-to-wishlist"
                      alt=""
                      src="/images/icon-navy-heart.png"
                      onClick={addToWishListHandler}
                    />
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
              {category && <span className="product-category">{category}</span>}
              <h1 className="product-title">
                <span className="bar"></span>
                {product.name}
              </h1>
              <h2 className="product-brand">by {product.brand}</h2>
              <h3 className="product-designer">{product.designer}</h3>
              <Rating value={product.rating} numReviews={product.numReviews} />
              <h3 className="info-item-title">
                <span className="bar"></span>product description
              </h3>
              <p className="info-item-description">{product.description}</p>
              <p className="info-item-sizes">
                Available as{" "}
                {size ? (size.length >= 1 ? `${size.join(", ")}` : "") : ""}.
              </p>
              {product.countInStock > 0 ? (
                <>
                  <span className="availability">in stock</span>
                  <div className="product-cta">
                    <h2 className="product-price">BHD {product.price}</h2>
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
                    <button className="add-to-cart" onClick={addToCartHandler}>
                      add to cart
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="availability">
                    out of stock. Email when stock available
                  </span>
                  <div className="product-cta" style={{ width: "400px" }}>
                    <SendEmail
                      subject={`Availability query for (${product.name})`}
                      type="Send"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="container">
            <div className="product-additional-info">
              <div className="divider"></div>
              <h3 className="info-item-title">
                <span className="bar"></span>story
              </h3>
              <p className="info-item-description">{product.story}</p>
              <div className="divider"></div>
              <h3 className="info-item-title">
                <span className="bar"></span>main accords
              </h3>
              <p className="info-item-description">
                {mainAccords
                  ? mainAccords.length > 0
                    ? `${mainAccords.join(", ")}`
                    : ""
                  : ""}
              </p>
              <div className="divider"></div>
              <h3 className="info-item-title">
                <span className="bar"></span>key notes
              </h3>
              <p className="info-item-description">
                {keyNotes
                  ? keyNotes.length > 0
                    ? `${keyNotes.join(", ")}`
                    : ""
                  : ""}
              </p>
              <div className="divider"></div>
              <h3 className="info-item-title">
                <span className="bar"></span>ingredients
              </h3>
              <p className="info-item-description">
                {ingredients
                  ? ingredients.length > 0
                    ? `${ingredients.join(", ")}`
                    : ""
                  : ""}
              </p>
            </div>
            {reviews ? (
              reviews.length > 0 ? (
                <div className="reviews">
                  <div className="customer-reviews">
                    <h3>
                      <span className="bar"></span>product reviews (
                      {product.numReviews})
                    </h3>
                    <div className="reviews-map">
                      {reviews.map((review) => (
                        <Review
                          key={review._id}
                          user={review.user}
                          title={review.title}
                          rating={review.rating}
                          body={review.body}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <div className="reviews">
              <WriteReview />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
