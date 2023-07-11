import React, { FunctionComponent } from "react";

import "./ChatBox.css";

const ChatBox: FunctionComponent = () => {
  return (
    <div className="chatbox">
      <div className="chatbox__messages"></div>
      <div className="chatbox__input">
        <input type="text" placeholder="Type something to send..." />
      </div>
    </div>
  );
};

export default ChatBox;
