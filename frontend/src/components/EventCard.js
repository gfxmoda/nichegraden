import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ id, type, image, heading, copy }) => {
  return (
    <div className="container">
      <div className="event-card">
        <img
          src={`/images/${image}`}
          alt=""
          className="event-img"
        />
        <Link to={`/${type}/${id}`} className="event-link">
          <div className="event-text">
            <h2 className="collection-heading">{heading}</h2>
            <span className="bar"></span>
            <p className="event-copy">
              {copy &&
                copy.length > 0 &&
                copy[0].split(" ").slice(0, 40).join(" ")}
              ......Read more
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
