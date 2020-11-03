import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "assets/scss/main.scss";
import "assets/scss/utils/vars.scss";

import stores from "stores";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
