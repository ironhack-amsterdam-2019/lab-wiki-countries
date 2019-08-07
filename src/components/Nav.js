import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

export class Nav extends Component {
  render() {
    return (
      <nav>
        <div>
          <span>WikiCountries</span>
        </div>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faGlobeEurope} /> Home
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
