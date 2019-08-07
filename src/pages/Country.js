import React, { Component } from "react";
import "./Country.css";
import countries from "../countries.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faFlag, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class Country extends Component {
  getCountry = cca3 => {
    let found = countries.find(country => {
      return country.cca3 === cca3;
    });
    return found;
  };

  render() {
    let country = this.getCountry(this.props.match.params.country);
    return (
      <div className="country">
        <h1>{country.name.common}</h1>
        <p>
          {country.name.official.indexOf("of") > 0 ||
          country.name.official.indexOf("Republic") > 0
            ? "The "
            : ""}
          {country.name.official} lies in {country.region} ({country.subregion})
          and has an area of {country.area}km².
        </p>
        <p>
          <FontAwesomeIcon icon={faGlobe} /> TLD: <span className="tld">{country.tld[0]}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Capital: <span className="tld">{country.capital[0]}</span>
        </p>
        <p className="neighbourLabel">
          <FontAwesomeIcon icon={faFlag} /> Neighbours:
        </p>
        <div className="neighbours">
          {country.borders.length > 0 ? (
            country.borders.map(border => {
              let neighbour = this.getCountry(border);
              return (
                <Link key={neighbour.cca3} to={"/" + neighbour.cca3}>
                  {neighbour.flag.normalize()} {neighbour.name.common}
                </Link>
              );
            })
          ) : (
            <p>none</p>
          )}
        </div>
      </div>
    );
  }
}

export default Country;
