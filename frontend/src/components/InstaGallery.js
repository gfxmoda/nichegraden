import React from "react";

const InstaGallery = () => {
  const helper = [0, 0, 0, 0, 0, 0];

  return (
    <div className="insta-section">
      <div className="insta-gallery">
        {helper.map((item, index) => (
          <img
            key={index}
            src={`/images/insta-gallery-${index + 1}.png`}
            alt=""
            className="insta-gallery-item"
          />
        ))}
      </div>
      <a
        href="https://www.instagram.com/nichegardenbh/"
        className="insta-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        our instagram channel
      </a>
    </div>
  );
};

export default InstaGallery;
