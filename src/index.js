import React from "react";
import ReactDOM from "react-dom";
import "./css/base/base.css";
import App from "./App";
import OverView from "./overView";
import Create from "./Create";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
        <Route path="/over">
          <OverView />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/Local_Note">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
