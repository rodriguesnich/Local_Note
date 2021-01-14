import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./style.css";

function Note() {
  return (
    <div className="Note container">
      <Link to={`/over`}>
        {" "}
        <section className="note">
          <h1>
            Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec
            leo commodo,
          </h1>
          <br />
          <h6>May 21, 2020</h6>
        </section>
      </Link>
    </div>
  );
}

export default Note;
