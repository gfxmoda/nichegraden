import React, { useState, useEffect } from "react";

const SendEmail = ({ type, subject }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {}, [email]);

  const storeEmail = (e) => {
    e.preventDefault();
    console.log(`${email}, ${subject}`);
    setEmail("");
  };

  return (
    <form className="email-form">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submit" onClick={storeEmail}>
        {type}
      </button>
    </form>
  );
};

export default SendEmail;
