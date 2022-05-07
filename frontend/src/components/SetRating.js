import React, { useState, useEffect } from "react";

const SetRating = () => {
  let [value, setValue] = useState(1);
  useEffect(() => {}, [value]);
  return (
    <div className="set-rating">
      <div className="stars">
        <img
          onMouseOver={() => {
            setValue(1);
          }}
          className="rating-star"
          alt=""
          src={
            value >= 1
              ? "/images/icon-navy-star-full.png"
              : "/images/icon-navy-star-empty.png"
          }
        />
        <img
          onMouseOver={() => {
            setValue(2);
          }}
          className="rating-star"
          alt=""
          src={
            value >= 2
              ? "/images/icon-navy-star-full.png"
              : "/images/icon-navy-star-empty.png"
          }
        />
        <img
          onMouseOver={() => {
            setValue(3);
          }}
          className="rating-star"
          alt=""
          src={
            value >= 3
              ? "/images/icon-navy-star-full.png"
              : "/images/icon-navy-star-empty.png"
          }
        />
        <img
          onMouseOver={() => {
            setValue(4);
          }}
          className="rating-star"
          alt=""
          src={
            value >= 4
              ? "/images/icon-navy-star-full.png"
              : "/images/icon-navy-star-empty.png"
          }
        />
        <img
          onMouseOver={() => {
            setValue(5);
          }}
          className="rating-star"
          alt=""
          src={
            value >= 5
              ? "/images/icon-navy-star-full.png"
              : "/images/icon-navy-star-empty.png"
          }
        />
      </div>
    </div>
  );
};

export default SetRating;
