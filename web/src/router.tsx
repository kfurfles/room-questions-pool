import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { globalNavRef } from "./core/navigation/navRef";

import { RoutesAuthentication } from "@modules/authentication";
import { RoutesHome } from "@modules/home";

export default () => {
  return (
    <Router ref={globalNavRef}>
      <Switch>
        <Route exact path="/">
          <RoutesHome />
        </Route>
        <Route path="/">
          <RoutesAuthentication />
        </Route>
      </Switch>
    </Router>
  );
};
