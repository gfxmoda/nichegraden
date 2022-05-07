import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {}, [name, email, phone, subject, body]);

  const sendMessage = (e) => {
    e.preventDefault();
    const message = { name, email, phone, subject, body };
    console.log(message);
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="your name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="your email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="your phone number"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="subject"
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        rows="5"
        name="message"
        className="message-body"
        placeholder="your message"
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button id="unique" onClick={sendMessage}>
        submit
      </button>
    </form>
  );
};

export default ContactForm;
