import React from "react";
import ContactCTA from "../components/ContactCTA";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const ContactScreen = () => {
  return (
    <div>
      <div className="main-contact-map">
        <Map />
      </div>
      <div className="contact main-contact" style={{ gap: "50px" }}>
        <div className="container">
          <div className="contact-content">
            <ContactCTA />
            <div className="contact-form" style={{ width: "50%" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
