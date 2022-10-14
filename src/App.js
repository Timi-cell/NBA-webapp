import React, { Component } from "react";
import Block from "./components/Blocks";
import Email from "./components/EmailValidation";
import Polls from "./components/Polls";
import Footer from "./components/resuables/Footer";
import Header from "./components/resuables/Header";
import Slide from "./components/Slide";

const homeApi = `http://localhost:3305/home`;

class App extends Component {
  state = {
    home: [],
  };
  componentDidMount() {
    fetch(homeApi, { method: "GET" })
      .then((response) => response.json())
      .then((json) => this.setState({ home: json }));
  }
  render() {
    return (
      <div>
        <Header />
        <Slide sliders={this.state.home.slider} />
        <Email />
        <Block blocks={this.state.home.blocks} />
        <Polls />
        <Footer />
      </div>
    );
  }
}

export default App;
