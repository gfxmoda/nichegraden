import React, { useEffect } from "react";

const Test = () => {
  const something = (
    <>
      <div
        className="test"
        style={{
          backgroundColor: "red",
          width: "100vw",
          heigh: "100vh",
          zIndex: "10000",
        }}
      >
        hello
      </div>
    </>
  );

  const somethingElse = (
    <>
      <div
        className="test"
        style={{
          backgroundColor: "green",
          width: "100vw",
          heigh: "100vh",
          zIndex: "10000",
        }}
      >
        welcome
      </div>
    </>
  );

  const print = () => {
  };

  useEffect(() => {}, []);

  return (
    <>
      
      <button onClick={print}>print pathname</button>
    </>
  );
};

export default Test;
