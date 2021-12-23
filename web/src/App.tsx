import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "~/redux";
import baseTheme from '~/styles/theme/default'

import { App } from "~/containers/App";

function AppWrapper() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default AppWrapper;
