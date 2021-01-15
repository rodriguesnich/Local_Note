import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./css/base/base.css";
import "./css/App.css";
import Header from "./components/Header";
import Note from "./components/Note";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.index = null;
    // this.state = { title: "", text: "", dateTime: "" };
    // this.notes = [];
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let notes = [];
    let index = Number(localStorage.getItem("@local-note/index"));

    for (let nota = 0; nota < index; nota++) {
      let buffer = JSON.parse(
        localStorage.getItem(`@local-note/note${nota + 1}`)
      );
      console.log("nota", nota + 1, ":", buffer);
      if (buffer === null) {
      } else {
        notes.push(<Note title={buffer.title} dateTime={buffer.dateTime} index={nota+1} />);
      }
    }
    return (
      <div className="App">
        <Header url="over" search={true} />
        <main className="body App-body container">{notes}</main>
        <Link to={`/create`}>
          <button className="button-add">+</button>
        </Link>
      </div>
    );
  }
}

export default App;
