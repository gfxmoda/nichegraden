import React from "react";

const Message = ({ body }) => {
  return (
    <div className="container">
      <div className="message">
        <div className="message-body">
          <h5>{body}</h5>
        </div>
      </div>
    </div>
  );
};

export default Message;
