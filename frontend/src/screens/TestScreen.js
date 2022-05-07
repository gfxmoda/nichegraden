import React from "react";

const TestScreen = () => {
  return (
    <div id="body">
      <div className="container">
        <div id="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e7/NICHEGARDEN_logo.png"
            alt="nichegardenbh logo"
          />
        </div>
        <div id="content">
          <h2 className="collection-heading">
            <span className="bar"></span>Account Verification
          </h2>
          <div id="section">
            <p>Hi name,</p>

            <p>
              Thanks for getting started with <strong>Nichegarden</strong>! We
              need a little more information to complete your registration,
              including confirmation of your email address. Click below to
              confirm your email address:
            </p>

            <a href="link">Click here to verify</a>

            <p>
              If you have any problem, please paste the above URL into your web
              browser.
            </p>

            <p>Thanks,</p>
            <p>Nichegarden support</p>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright 2022, Niche Garden w.l.l. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;
