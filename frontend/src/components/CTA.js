import React from "react";
import ContactForm from "./ContactForm";

import NicheFeatures from "./NicheFeatures";

const CTA = () => {
  return (
    <div>
      <div className="contact-section">
        <div className="map">
          <div className="location">
            <div className="graphic">
              <img src="/images/map.png" alt="" />
              <button className="get-directions">get directions</button>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact-form">
            <h1 className="collection-heading">
              <span className="bar"></span>contact
            </h1>
            <ContactForm />
          </div>
        </div>
        <NicheFeatures />
      </div>
    </div>
  );
};

export default CTA;
