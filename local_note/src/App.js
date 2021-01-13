import React from "react";


import "./css/base.css";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  return (
    <div className="App container">
      <Header url="over"/>
      <main className="body container">
        <Note />
      </main>
      <button className="button-add">+</button>
    </div>
  );
}

export default App;
