import React from "react";
import { Route, Switch } from "react-router";

import { Home } from "../pages";

const RoutesHome = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export { RoutesHome };
