import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import Meets from "./components/meets";
import PageNotFound from "./components/pageNotFound";
import PrivateRoute from "./router/PrivateRoute";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Meets} />
        <Route exact component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
