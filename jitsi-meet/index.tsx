import "react-app-polyfill/ie11";
import React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import dotenv from "dotenv";

import App from "./src/App";

import store from "./src/redux/store";

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
