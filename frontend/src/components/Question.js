import React, { useState, useEffect } from "react";

const Question = ({ question, answer }) => {
  const [visibility, setVisibility] = useState("hidden");
  const [height, setHeight] = useState("0");
  const [padding, setpadding] = useState("0 25px");

  useEffect(() => {}, [height]);
  const toggle = () => {
    if (visibility === "hidden") {
      setVisibility("visible");
      setHeight("fit-content");
      setpadding("25px");
    } else {
      setVisibility("hidden");
      setHeight("0");
      setpadding("0 25px");
    }
  };
  return (
    <div className="question">
      <div className="Q">
        <button
          onClick={toggle}
          style={
            visibility === "visible"
              ? { backgroundColor: "var(--var-color-ng-navy-blue)" }
              : {}
          }
        >
          <h3>{question}</h3>
        </button>
      </div>
      <div
        className="A"
        style={{
          visibility: `${visibility}`,
          height: `${height}`,
          padding: `${padding}`,
        }}
      >
        {answer.map((s, index) => (
          <p className="step" key={index}>
            {s}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question;
