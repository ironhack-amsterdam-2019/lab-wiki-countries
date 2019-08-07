import React, { Component } from 'react'
import { Route } from "react-router-dom";
import CountryNav from './components/CountryNav'
import Home from './pages/Home'
import Country from './pages/Country'

export class Content extends Component {
  render() {
    return (
      <div className="content">
        <CountryNav/>
        <Route exact path="/" component={Home} />
        <Route path="/:country" component={Country} />
      </div>
    )
  }
}

export default Content
