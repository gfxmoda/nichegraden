import React from "react";

const EventDetails = ({ event, type }) => {
  return (
    <div className="event-details">
      <h1 className="collection-heading">
        <span className="bar"></span>
        {event.heading}
      </h1>
      <img src={`/images/${event.coverImage}`} alt="" />
      <p>{event.copy}</p>
      <div className="event-gallery">
        {event.images &&
          event.images.length > 0 &&
          event.images.map((img, index) => (
            <img key={index} src={`/images/${img}.jpg`} alt="" />
          ))}
      </div>
    </div>
  );
};

export default EventDetails;
