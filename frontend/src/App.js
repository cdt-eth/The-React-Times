import React from "react";
import Header from "./components/Header";
import { Table } from "./components/Table";
import "./App.css";
import { connect, sendMsg } from "./api/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header title={"Golang News Aggregator"} />
        <Table col1={"Title"} col2={"Keywords"} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
