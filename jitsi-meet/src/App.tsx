import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Meets from "./components/meets";
import PrivateRoute from "./router/PrivateRoute";

import "./style.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Meets} />
      </Switch>
    </Router>
  );
};

export default App;
