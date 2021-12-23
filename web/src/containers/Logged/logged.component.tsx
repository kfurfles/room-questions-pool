import React from "react";
import {Container} from './styled'

const LoggedContainer: React.FC = (props) => {
  const {children} = props
  return (
    <Container>
      {children}
    </Container>
  );
}


export { LoggedContainer };
