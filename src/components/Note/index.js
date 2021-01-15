import { BrowserRouter as Link } from "react-router-dom";

import "./style.css";

function Note(props) {
  return (
    <div className="Note">
      <Link to={`/over/${props.index}`}>
        <section className="note">
          <h1>{props.title}</h1>
          <br />
          <h6>{props.dateTime}</h6>
        </section>
        <br />
      </Link>
    </div>
  );
}

export default Note;
