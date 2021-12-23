import React from "react";
import { Helmet } from "react-helmet-async";
import {Card} from "~/Components/Card"

import { Container, PoolQuestionArea, PoolQuestionTitle } from "./styled";

function Home() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bem vindo !</title>
      </Helmet>
        <PoolQuestionArea>
          <PoolQuestionTitle>
            Quantas xicáras de café você toma por dia ?
          </PoolQuestionTitle>
        </PoolQuestionArea>
      
    </Container>
  );
}

export { Home };
