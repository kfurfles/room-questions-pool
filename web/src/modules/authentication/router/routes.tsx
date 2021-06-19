import React from "react";
import { Route, Switch } from "react-router";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";

import { Login } from "../pages";

const RoutesAuthentication = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export { RoutesAuthentication };
