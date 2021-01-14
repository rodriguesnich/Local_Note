import React, { useState, useEffect } from "react";

import "./css/base/base.css";
import "./css/overView.css";
import Header from "./components/Header";

class OverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("carregou");
    console.log(localStorage.getItem("@local-note/note"));
    let msg = localStorage.getItem("@local-note/note");
    this.setState({ value: msg });
  }

  render() {
    return (
      <div className="container">
        <Header url="create" />
        <br />
        <main className="body container">
          <section className="tittle">
            {/* <h1>
              Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus
              nec leo
            </h1> */}
            <br />
            {/* <h6>May 21, 2020</h6> */}
            <br />
            <p>{this.state.value}</p>
            {/* <textarea
              type="text"
              placeholder="Note..."
              value={this.state.value}
              onChange={this.handleChange}
            /> */}
            {/* <p>
              Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as
              pessoas mais interessantis. Aenean aliquam molestie leo, vitae
              iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non
              turpis scelerisque, eget. Atirei o pau no gatis, per gatis num
              morreus. Viva Forevis aptent taciti sociosqu ad litora torquent.
              Interagi no mé, cursus quis, vehicula ac nisi. Tá deprimidis, eu
              conheço uma cachacis que pode alegrar sua vidis. Leite de capivaris,
              leite de mula manquis sem cabeça. Quem manda na minha terra sou
              euzis! Cevadis im ampola pa arma uma pindureta. Mauris nec dolor in
              eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis
              nisl. Per aumento de cachacis, eu reclamis.
            </p> */}
          </section>
        </main>
      </div>
    );
  }
}

export default OverView;
