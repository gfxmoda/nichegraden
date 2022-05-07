import React from "react";
import { Link } from "react-router-dom";

import SocialLinks from "../components/SocialLinks";

const ContactCTA = () => {
  return (
    <div className="main-contact-cta">
      <h1 className="collection-heading">
        <span className="bar"></span>Contact Us
      </h1>
      <p>
        Have a question in mind? Send us your inquiries! Kindly fill in the form
        with all the details and we will get back to you shortly.
      </p>
      <p>
        if you have any questions please visit our{" "}
        <Link to="/help-center">
          <strong>Help Center Page</strong>
        </Link>
      </p>
      <a href="tel:+97316166666">+973 1616 6666</a>
      <a href="mailto:customercare@nichegarden.com">
        customercare@nichegarden.com
      </a>
      <SocialLinks />
    </div>
  );
};

export default ContactCTA;
