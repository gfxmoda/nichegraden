import React from "react";
import { Link } from "react-router-dom";

const About = ({
  align,
  image,
  heading,
  text,
  link,
  button,
  label,
  external,
}) => {
  return (
    <div className="container">
      <div
        className="about"
        style={{ flexDirection: align === "end" ? "row-reverse" : "row" }}
      >
        <div className="img">
          <img src={`/images/${image}.png`} alt="" />
        </div>
        <div className="text" style={{ alignItems: `flex-${align}` }}>
          <h1 className="collection-heading">
            <span
              className="bar"
              style={
                align === "end"
                  ? { left: "auto", right: "0" }
                  : { left: "0", right: "auto" }
              }
            ></span>
            {heading}
          </h1>
          <p
            className="copy"
            style={{ textAlign: align === "end" ? "right" : "left" }}
          >
            {text}
          </p>
          {button === "yes" &&
            (external ? (
              <a href={external}>
                <button>{label ? label : "learn more"}</button>
              </a>
            ) : (
              <Link to={link}>
                <button>{label ? label : "learn more"}</button>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
