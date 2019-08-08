import React, { Component } from "react";
import "./Country.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faFlag,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class Country extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  getCountry = (countries, cca3) => {
    return countries.find(country => {
      return country.cca3 === cca3;
    });
  };

  render() {
    let country;
    let component;
    if (this.props.loaded && !this.props.error) {
      country = this.getCountry(
        this.props.countries,
        this.props.match.params.country
      );
      component = (
        <div className="country">
          <h1>{country.name.common}</h1>
          <p>
            {country.name.official.indexOf("of") > 0 ||
            country.name.official.indexOf("Republic") > 0
              ? "The "
              : ""}
            {country.name.official} lies in {country.region} (
            {country.subregion}) and has an area of {country.area}km².
          </p>
          <p>
            <FontAwesomeIcon icon={faGlobe} /> TLD:{" "}
            <span className="tld">{country.tld[0]}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Capital:{" "}
            <span className="tld">{country.capital[0]}</span>
          </p>
          <p className="neighbourLabel">
            <FontAwesomeIcon icon={faFlag} /> Neighbours:
          </p>
          <div className="neighbours">
            {country.borders.length > 0 ? (
              country.borders.map(border => {
                let neighbour = this.getCountry(this.props.countries, border);
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
    } else if(this.props.error) {
      component = (
        <div>
          <h1>Error</h1>
          <p>{this.props.error.message}</p>
        </div>
      );
    } else {
      component = (
        <div>
          <p>Getting countries from server...</p>
          <p>Please wait...</p>
        </div>
      );
    }
    return component;
  }
}

export default Country;
