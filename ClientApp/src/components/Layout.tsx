import React, { FunctionComponent } from "react";
import { Container } from "reactstrap";
import Header from "./Header";

const Layout: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <Container tag="main">{children}</Container>
    </div>
  );
};

export default Layout;
