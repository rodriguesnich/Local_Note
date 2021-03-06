// import "./css/base.css"
import "./style.css";
import { Link } from "react-router-dom";

function Header(props) {
  let button;
  if (props.search) {
    button = <button className="seachButton">buscar</button>;
  } else {
    button = (
      <button className="editButton">
        <Link to={`/${props.url}/${props.index}`}>{props.name}</Link>
      </button>
    );
  }

  return (
    <div className="App">
      <br />
      <header className="header container">
        <button className="mainButton">
          <Link to={`/Local_Note`}>Local_Note</Link>
        </button>
        {button}
      </header>
      <br />
    </div>
  );
}

export default Header;
