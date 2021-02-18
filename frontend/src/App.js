import React from "react";
import Header from "./components/Header";
import { SVG } from "./components/SVG";
import News from "./components/News";
import "./App.css";
// {/* <style>@import url("https://use.typekit.net/sjh2xka.css")</style>
// <style>@import url("https://use.typekit.net/sjh2xka.css")</style> */}
// <link rel="stylesheet" href="https://use.typekit.net/sjh2xka.css">

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"Golang News Aggregator"} />
        <SVG />
        <News />
      </div>
    );
  }
}

export default App;
