import React from 'react';
import { SVG } from "./SVG";
import Masthead from "./Masthead";

type HeaderProps = {
  title:string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <>
        <header className="App-header">
          <h1 className="siteTitle">
            <a href="/">{this.props.title}</a>
          </h1>

          <img
            src="https://media1.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
            alt="react-logo-gif"
          />

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
              href="https://github.com/christiandavidturner/The-React-Times"
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
