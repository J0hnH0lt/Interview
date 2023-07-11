import React, { FunctionComponent } from "react";

import ChatBox from "./ChatBox";

const Home: FunctionComponent = () => {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ marginTop: 32 }}>Concierge Desk</h1>
      <ChatBox />
    </div>
  );
};

export default Home;
