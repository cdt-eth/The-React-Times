import React from "react";
import Header from "./components/Header";
import { SVG } from "./components/SVG";
// import { Table } from "./components/Table";
import Posts from "./components/Posts";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"Golang News Aggregator"} />
        <SVG />
        <Posts />
      </div>
    );
  }
}

export default App;
