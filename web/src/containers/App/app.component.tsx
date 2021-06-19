import React from "react";
import RootRouter from "~/router";

import "./app.css";

import { Drawer } from "~/containers/Drawer";

function App() {
  return (
    <>
      <RootRouter />
      <Drawer />
    </>
  );
}

export { App };
