import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { globalNavRef } from "./core/navigation/navRef";

import { RoutesAuthentication } from "@modules/authentication";
import { RoutesHome } from "@modules/home";
import {LoggedContainer} from "~/containers/Logged"

function Logged () {
  return (
    <LoggedContainer>
      <Route exact path="/">
        <RoutesHome />
      </Route>
    </LoggedContainer>
  )
}

function NonLogged() {
  return (
    <Route path="**">
      <RoutesAuthentication />
    </Route>
  )
}

export default () => {
  const auth = true
  return (
    <Switch>
      { auth ? <Logged /> : <NonLogged /> }
    </Switch>
  );
};
