import React from "react";
import { Link } from "react-router-dom";

import SendEmail from "./SendEmail";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="cta">
            <div className="newsletter">
              <h2 className="collection-heading">
                <span className="bar"></span>don’t miss an update
              </h2>
              <p>
                Subscribe to be the first to receive our newsletter, best deals
                and so much more!
              </p>
              <SendEmail subject="Subscribe to the channel" type="subscribe" />
            </div>
            <div className="follow-us">
              <h2 className="collection-heading">
                <span className="bar"></span>follow us
              </h2>
              <p>
                Keep up with the latest posts and updates on our social media
              </p>
              <SocialLinks />
            </div>
          </div>
          <div className="site-map">
            <ul className="col">
              <li>
                <Link to="/">nighegarden</Link>
              </li>
              <li>
                <Link to="/for-him">for him</Link>
              </li>
              <li>
                <Link to="/for-her">for her</Link>
              </li>
              <li>
                <Link to="/unisex">unisex</Link>
              </li>
              <li>
                <Link to="/for-home">for home</Link>
              </li>
              <li>
                <Link to="/skin-care">skin care</Link>
              </li>
            </ul>
            <ul className="col">
              <li>
                <Link to="/our-garden">our garden</Link>
              </li>
              <li>
                <Link to="/wishlist">wishlist</Link>
              </li>
              <li>
                <Link to="/track-order">track order</Link>
              </li>
            </ul>
            <ul className="col">
              <li>
                <Link to="/contact">contact</Link>
              </li>
              <li>
                <Link to="/career">career</Link>
              </li>
              <li>
                <Link to="/help-center">help center</Link>
              </li>
            </ul>
            <ul className="col">
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <Link to="/privacy-policy">privacy policy</Link>
              </li>
              <li>
                <Link to="/tnc">{`T&C`}</Link>
              </li>
            </ul>
          </div>
          <div className="copyright">
            <p>{`© Copyright ${date.getFullYear()}, Niche Garden w.l.l. All rights reserved.`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
