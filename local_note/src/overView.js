import "./css/base.css";
import "./css/overView.css";
import Header from "./components/Header";

function OverView() {
  return (
    <div className="container">
      <Header url="create" />
      <br />
      <main className="body container">
        <section className="tittle">
          <h1>
            Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec
            leo
          </h1>
          <br />
          <h6>May 21, 2020</h6>
          <br />

          <p>
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
          </p>
        </section>
      </main>
    </div>
  );
}

export default OverView;
