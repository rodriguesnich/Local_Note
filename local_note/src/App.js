import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./css/base/base.css";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  return (
    <div className="App container">
      <Header url="over" search={true} />
      <main className="body container">
        <Note />
      </main>
      <Link to={`/create`}>
        <button className="button-add">+</button>
      </Link>
    </div>
  );
}

export default App;
