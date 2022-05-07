import React from "react";

import Rating from "./Rating";

const Review = ({ user, title, rating, body }) => {
  return (
    <>
      <div className="review">
        <span className="review-username">{user}</span>
        <span className="review-title">{`>>>  ${title}  <<<`}</span>
        <Rating value={rating} />
        <span className="review-body">{body}</span>
      </div>
      <span className="bar"></span>
    </>
  );
};

export default Review;
