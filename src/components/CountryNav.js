import React, { Component } from "react";
import "./CountryNav.css";
import countries from "../countries.json";
import { Link } from "react-router-dom";

export class CountryNav extends Component {
  render() {
    return (
      <div className="countryNav">
        {countries.map(country => (
          <Link key={country.cca3} to={"/" + country.cca3}>
            {country.flag.normalize()} {country.name.common}
          </Link>
        ))}
      </div>
    );
  }
}

export default CountryNav;
