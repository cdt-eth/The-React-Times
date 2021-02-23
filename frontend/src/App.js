import React from "react";
import Header from "./components/Header";
import News from "./components/News";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"The React Times"} />
        <News />
      </div>
    );
  }
}

export default App;
