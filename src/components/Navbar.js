import React from "react";
import PropTypes from "prop-types"; //pts is short cut
import { Link } from "react-router-dom";//this is for to link the tag<a></a> whic helps us render from one page to another

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* here the Link and to should be changed inplace of a and need mention the path uskng /Home  */}
      <Link className="navbar-brand" to="/Home"> 
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/Home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
        <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototypes = { title: PropTypes.string, aboutText: PropTypes.string };
Navbar.defaultProps = {
  title: 'Set title here',aboutText:"Set about Text"
};
  