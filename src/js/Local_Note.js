import React from 'react';
import '../css/Local_Note.css';

function App() {
  return (
    <div className="App">
    <header>
        <div className="navbar-fixed">
          <nav className="indigo">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">Local_Note</a>
              <ul className>
                <li className="right">
                  <a href="sass.html"><i className="material-icons">search</i></a>
                </li>
                {/* <li class="left">
              <a class="dropdown-trigger" href="#" data-target="dropdown1">
                <i class="material-icons">more_vert</i>
              </a>
            </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div id="adder">
      <a  class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">add</i>
      </a>
    </div> 

     <div className="row">
        <div className="col s12 m5 l5">
          <div className="card-panel yellow accent-2">
            <div className id="tit">
              <div className="input-field col s12">
                {/* <i class="material-icons prefix">account_circle</i> */}
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">Tittle</label>
              </div>
              <a className=" btn waves-effect waves-light grey">
                <i className="material-icons">close</i>
              </a>
            </div>
            <div className="input-field">
              <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
              <label htmlFor="textarea1">Note</label>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
