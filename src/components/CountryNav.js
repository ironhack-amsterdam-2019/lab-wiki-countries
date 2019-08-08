import React, { Component } from "react";
import "./CountryNav.css";
import { Link } from "react-router-dom";

export class CountryNav extends Component {

  render() {
    return (
      <div className="countryNav">
        {this.props.error &&
          <h1>Error</h1>
        }
        {this.props.countries.map(country => (
          <Link key={country.cca3} to={"/" + country.cca3}>
            {country.flag.normalize()} {country.name.common}
          </Link>
        ))}
      </div>
    );
  }
}

export default CountryNav;
