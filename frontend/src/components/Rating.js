import React from "react";

const Rating = ({ value, numReviews }) => {
  return (
    <div className="rating">
      <div className="stars">
        <img
          className="rating-star"
          alt=""
          src={
            value >= 1
              ? "/images/icon-beige-star-full.png"
              : value >= 0.5
              ? "/images/icon-beige-star-half.png"
              : "/images/icon-beige-star-empty.png"
          }
        />
        <img
          className="rating-star"
          alt=""
          src={
            value >= 2
              ? "/images/icon-beige-star-full.png"
              : value >= 1.5
              ? "/images/icon-beige-star-half.png"
              : "/images/icon-beige-star-empty.png"
          }
        />
        <img
          className="rating-star"
          alt=""
          src={
            value >= 3
              ? "/images/icon-beige-star-full.png"
              : value >= 2.5
              ? "/images/icon-beige-star-half.png"
              : "/images/icon-beige-star-empty.png"
          }
        />
        <img
          className="rating-star"
          alt=""
          src={
            value >= 4
              ? "/images/icon-beige-star-full.png"
              : value >= 3.5
              ? "/images/icon-beige-star-half.png"
              : "/images/icon-beige-star-empty.png"
          }
        />
        <img
          className="rating-star"
          alt=""
          src={
            value >= 5
              ? "/images/icon-beige-star-full.png"
              : value >= 4.5
              ? "/images/icon-beige-star-half.png"
              : "/images/icon-beige-star-empty.png"
          }
        />
      </div>
      {numReviews && <span>({numReviews} customer reviews)</span>}
    </div>
  );
};

export default Rating;
