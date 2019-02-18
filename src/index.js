import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./App";

import { getStore } from "./state/store";

ReactDOM.render(
  <ReduxProvider store={getStore()}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
