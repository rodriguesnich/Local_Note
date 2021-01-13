import React from "react";
import "./css/base.css";
import Header from "./components/Header";

function Create() {
  return (
    <div className="Create container">
      <Header url="over" />
      <main className="body container">
        <input placeholder="Title"></input>
        <br />
        <br />
        <textarea placeholder="Type something..."></textarea>
      </main>
    </div>
  );
}

export default Create;
