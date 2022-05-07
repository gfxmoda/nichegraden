import React, { useState, useEffect } from "react";

const WriteReview = () => {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [rating, setRating] = useState(1);

  const setReview = () => {
    const customerReview = { user, title, body, rating };
    console.log(customerReview);
    setUser("");
    setTitle("");
    setBody("");
    setRating(1);
  };

  useEffect(() => {}, [user, title, body, rating]);

  return (
    <div className="write-review">
      <h3>
        <span className="bar"></span>write a review
      </h3>
      <div className="review-form">
        <div className="set-rating">
          <div className="stars">
            <img
              onMouseOver={() => {
                setRating(1);
              }}
              className="rating-star"
              alt=""
              src={
                rating >= 1
                  ? "/images/icon-navy-star-full.png"
                  : "/images/icon-navy-star-empty.png"
              }
            />
            <img
              onMouseOver={() => {
                setRating(2);
              }}
              className="rating-star"
              alt=""
              src={
                rating >= 2
                  ? "/images/icon-navy-star-full.png"
                  : "/images/icon-navy-star-empty.png"
              }
            />
            <img
              onMouseOver={() => {
                setRating(3);
              }}
              className="rating-star"
              alt=""
              src={
                rating >= 3
                  ? "/images/icon-navy-star-full.png"
                  : "/images/icon-navy-star-empty.png"
              }
            />
            <img
              onMouseOver={() => {
                setRating(4);
              }}
              className="rating-star"
              alt=""
              src={
                rating >= 4
                  ? "/images/icon-navy-star-full.png"
                  : "/images/icon-navy-star-empty.png"
              }
            />
            <img
              onMouseOver={() => {
                setRating(5);
              }}
              className="rating-star"
              alt=""
              src={
                rating >= 5
                  ? "/images/icon-navy-star-full.png"
                  : "/images/icon-navy-star-empty.png"
              }
            />
          </div>
        </div>
        <input
          type="text"
          name="name"
          className="reviewer-name"
          placeholder="your name"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          name="title"
          className="review-title"
          placeholder="review subject"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="reviewcopy"
          className="review-body"
          placeholder="description"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button id="unique" onClick={setReview}>
          submit
        </button>
      </div>
    </div>
  );
};

export default WriteReview;
