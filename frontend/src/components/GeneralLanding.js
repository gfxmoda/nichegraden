import React from "react";

const GeneralLanding = ({ category }) => {
  return (
    <div className="general-landing">
      {category !== "our-garden" && (
        <img alt="" src={`/images/landing-${category}.png`} />
      )}

      <div className="general-landing-overlay"></div>
      {category === "our-garden" && (
        <div>
          <video width="100%" height="auto" autoPlay muted loop>
            <source src="/images/landing-our-garden.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
      )}
      <div className="container">
        <div className="landing-text">
          <h1 className="landing-heading">{category.split("-").join(" ")}</h1>
          {category === "our-garden" || category === "account" ? (
            ""
          ) : category === "our-boutiques" ||
            category === "help-center" ||
            category === "privacy-policy" ||
            category === "tnc" ? (
            <p className="landing-description">
              Discover our locations and latest news
            </p>
          ) : category === "blog" ? (
            <p className="landing-description">
              Keep up with the latest news and updates with the new collections!
            </p>
          ) : category === "career" || category === "wishlist" ? (
            ""
          ) : (
            <p className="landing-description">
              a variety of luxurious
              {category === "for-him" ||
              category === "for-her" ||
              category === "unisex"
                ? " fragrances"
                : " products"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralLanding;
