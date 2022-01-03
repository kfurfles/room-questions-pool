import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react';
import { ThemeProvider } from "styled-components";

import { store, persistor } from "~/redux";
import baseTheme from '~/styles/theme/default'
import { App } from "~/containers/App";
import { QueryClientProvider } from "react-query";
import { queryClient } from '~/core/query'
import { globalNavRef } from "./core/navigation/navRef";

function AppWrapper() {
  return (
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={baseTheme} >
        <HelmetProvider>
          <Router ref={globalNavRef}>
            <App />
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </QueryClientProvider>
    </Provider>
    </PersistGate>
  );
}

export default AppWrapper;
