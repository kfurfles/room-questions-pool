import React from "react";
import { Route, Switch } from "react-router";

import { Login } from "../pages";

const RoutesAuthentication = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export { RoutesAuthentication };
