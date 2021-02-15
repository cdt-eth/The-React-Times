import React from "react";
import logo from "../gopher.jpg";

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>{this.props.title}</h1>
        <img src={logo} alt="golang-gopher" />
      </header>
    );
  }
}
