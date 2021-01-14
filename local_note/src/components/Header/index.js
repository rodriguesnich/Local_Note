// import "./css/base.css"
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Header(props) {
  let button;
  if (props.search) {
    button = <button>p</button>;
  } else {
    button = (
      <button>
        <Link to={`/${props.url}`}>s</Link>
      </button>
    );
  }

  return (
    <div className="App container">
      <br />
      <header className="header">
        <button>
          <Link to={`/`}>Local_Note</Link>
        </button>
        {button}
      </header>
      <br />
    </div>
  );
}

export default Header;
