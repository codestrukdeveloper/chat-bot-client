import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import StyledComponentTheme from "@config/theme";
import "./styles/styles.css";

const rootNode = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledComponentTheme>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StyledComponentTheme>
    </BrowserRouter>
  </React.StrictMode>,
  rootNode
);
