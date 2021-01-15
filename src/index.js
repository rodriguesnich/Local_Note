import React from "react";
import ReactDOM from "react-dom";
import "./css/base/base.css";
import App from "./App";
import OverView from "./overView";
import Create from "./Create";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <OverView /> */}
    <Router>
      <Switch>
        <Route path="/over">
          <OverView />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
