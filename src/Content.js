import React, { Component } from 'react'
import { Route } from "react-router-dom";
import CountryNav from './components/CountryNav'
import Home from './pages/Home'
import Country from './pages/Country'
import axios from "axios";

export class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      loaded: false
    };
  }

  /**
   * Only load the countries once, then pass it on to both components using countries
   */
  componentDidMount() {
    axios
      //.get("https://countries.tech-savvy.tech/countries")
      .get("http://localhost:3001/countries")
      .then(countries => this.setState({ countries: countries.data, loaded: true }))
      .catch(error => this.setState({ error: error }));
  }

  render() {
    return (
      <div className="content">
        <CountryNav {...this.state}/>
        <Route exact path="/" component={Home} />
        <Route path="/:country" render={routeProps => <Country {...this.state} {...routeProps}/>} />
      </div>
    )
  }
}

export default Content
