import React from "react";

import Question from "./Question";

const FAQs = ({ array }) => {
  return (
    <div className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-category">
            <h2 className="collection-heading">
              <span className="bar"></span>create/ manage my account
            </h2>
            {array
              ? array
                  .filter((q) => q.category === "account")
                  .map((q) => (
                    <Question
                      key={q._id}
                      question={q.question}
                      answer={q.answer}
                    />
                  ))
              : ""}
          </div>
          <div className="faq-category">
            <h2 className="collection-heading">
              <span className="bar"></span>general
            </h2>
            {array
              ? array
                  .filter((q) => q.category === "general")
                  .map((q) => (
                    <Question
                      key={q._id}
                      question={q.question}
                      answer={q.answer}
                    />
                  ))
              : ""}
          </div>
          <div className="faq-category">
            <h2 className="collection-heading">
              <span className="bar"></span>ordering
            </h2>
            {array
              ? array
                  .filter((q) => q.category === "order")
                  .map((q) => (
                    <Question
                      key={q._id}
                      question={q.question}
                      answer={q.answer}
                    />
                  ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
