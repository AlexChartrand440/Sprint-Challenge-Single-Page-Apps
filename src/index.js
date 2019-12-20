import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from "./Characters"

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/characters" component={Characters} />
    <Route exact path="/characters/:SEARCH" component={Characters} />
    <Route path="/character/:ID" component={App} />
    {/* <Route exact path="/learn/:DATE" component={Learn} /> */}
  </Router>,
  document.getElementById("root")
);
