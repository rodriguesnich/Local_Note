import React from "react";
import { withRouter } from "react-router-dom";

import "./css/base/base.css";
import "./css/overView.css";
import Header from "./components/Header";

class OverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", text: "", dateTime: "" };
    this.index = null;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.index = window.location.pathname.split("/").pop();
    console.log(this.index);

    const nota = JSON.parse(
      localStorage.getItem(`@local-note/note${this.index}`)
    );
    this.setState({ title: nota.title });
    this.setState({ text: nota.text });
    this.setState({ dateTime: nota.dateTime });
  }

  handleClick(event) {
    console.log("ai");
    console.log(this.index);
    localStorage.removeItem(`@local-note/note${this.index}`);
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="container">
        <Header url="create" index={this.index} name="editar" />
        <br />
        <main className="body container">
          <section className="over">
            <h1 className="over-title">{this.state.title}</h1>
            <br />
            <h6 className="over-dateTime">{this.state.dateTime}</h6>
            <br />
            <p className="over-text">{this.state.text}</p>
          </section>
        </main>
        <button className="button-delete" onClick={this.handleClick}>
          d
        </button>
      </div>
    );
  }
}

export default withRouter(OverView);
