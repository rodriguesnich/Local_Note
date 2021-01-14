import React from "react";
import "./css/base/base.css";
import Header from "./components/Header";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    localStorage.setItem('@local-note/note', this.state.value)
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="Create container">
        <Header url="over" />
        <main className="body container">
          {/* <input placeholder="Title" type="text"></input> */}
          <textarea
            type="text"
            placeholder="Note..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </main>
      </div>
    );
  }
}

export default Create;
