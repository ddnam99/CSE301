import React from "react";
import Login from "./components/login";
import Meets from "./components/meets";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Meets />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
