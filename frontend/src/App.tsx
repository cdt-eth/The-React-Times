import React from "react";
import Header from "./components/Header";
import News from "./components/News";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"The React Times"} />
        <News />
        <Footer />
        <Spacer height={30} />
      </div>
    );
  }
}

export default App;
