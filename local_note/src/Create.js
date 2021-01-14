import React from "react";
import "./css/base/base.css";
import Header from "./components/Header";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", text: "", dateTime: "" };
    this.index = null;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.index = window.location.pathname.split("/").pop();
    console.log(this.index);
    if (this.index === "create") {
      console.log("veio do criar");
      this.index = localStorage.getItem("@local-note/index");
      console.log("current: " + this.index);
      let next = (Number(this.index) + 1).toString();
      console.log(next);
      localStorage.setItem("@local-note/index", next);
    } else {
      const nota = JSON.parse(
        localStorage.getItem(`@local-note/note${this.index}`)
      );
      this.setState({ title: nota.title });
      this.setState({ text: nota.text });
      this.setState({ dateTime: nota.dateTime });
    }
  }

  handleChange(event) {
    if (event.target.id === "title") {
      this.setState({ title: event.target.value });
      console.log("Title: " + this.state.title);
    } else {
      this.setState({ text: event.target.value });
      console.log("Text: " + this.state.text);
    }
    var today = new Date(),
      dateTime =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    this.setState({ dateTime: dateTime });
    var note = {
      title: this.state.title,
      text: this.state.text,
      dateTime: this.state.dateTime,
    };
    console.log(note);
    localStorage.setItem(`@local-note/note${this.index}`, JSON.stringify(note));
  }

  render() {
    return (
      <div className="Create container">
        <Header url="over" index={this.index} name="salvar" />
        <main className="body container">
          {/* <input placeholder="Title" type="text"></input> */}
          <input
            type="text"
            id="title"
            placeholder="Title..."
            value={this.state.title}
            onChange={this.handleChange}
          />

          <textarea
            type="text"
            id="text"
            placeholder="Note..."
            value={this.state.text}
            onChange={this.handleChange}
          />
        </main>
      </div>
    );
  }
}

export default Create;
