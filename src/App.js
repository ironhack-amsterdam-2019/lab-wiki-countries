import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Content from './Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Content/>
        <Footer />
      </div>
    );
  }
}

export default App;
