import React from "react";
import { SVG } from "./SVG";
import Masthead from "./Masthead";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header className="App-header">
          <h1 href="/" className="siteTitle">
            <a href="/">{this.props.title}</a>
          </h1>
          {/* <a href="/">  */}
          <img
            src="https://media1.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
            frameBorder="0"
            allowFullScreen=""
            alt="react-logo-gif"
          />
          {/* </a> */}

          <p className="credit">
            work in progress:{" "}
            <a
              href="https://cdt.works/"
              target="_blank"
              rel="noopener noreferrer"
            >
              me
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/christiandavidturner/React-News"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </a>
          </p>
        </header>
        <SVG />
        <Masthead />
      </>
    );
  }
}
