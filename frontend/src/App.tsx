import React from "react";
// @ts-ignore
import Header from "./components/Header";
// @ts-ignore
import News from "./components/News";
// @ts-ignore
import Footer from "./components/Footer";
// @ts-ignore
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
