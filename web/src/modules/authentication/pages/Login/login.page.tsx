import React from "react";
import { Helmet } from "react-helmet-async";

import { Container } from "./styles";

function Login() {
  return (
    <Container className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <header className="App-header">
        <p>Pagina de Login!</p>
      </header>
    </Container>
  );
}

export { Login };
