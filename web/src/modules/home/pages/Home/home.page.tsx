import React from "react";
import { Helmet } from "react-helmet-async";

import { Container } from "./styles";

function Home() {
  return (
    <Container className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bem vindo !</title>
      </Helmet>
      <header className="App-header">
        <p>Pagina de Home!</p>
      </header>
    </Container>
  );
}

export { Home };
