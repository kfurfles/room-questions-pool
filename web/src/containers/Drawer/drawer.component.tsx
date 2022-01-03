import React from "react";

import { Container } from "./styles";

interface DrawerProps {
  show: boolean;
}
const Drawer: React.FC<DrawerProps> = (props) => {
  const { show, children} = props
  return <Container show={show}>{children}</Container>;
};

export { Drawer };
