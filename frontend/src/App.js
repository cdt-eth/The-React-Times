import React from "react";
import Header from "./components/Header";
// import { Table } from "./components/Table";
import Posts from "./components/Posts";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title={"Golang News Aggregator"} />
        <svg
          width="100%"
          height="200px"
          fill="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="100%" stop-color="#6eb6e5" />
            <stop offset="100%" stop-color="#6eb6e5" />
            <stop offset="100%" stop-color="#6eb6e5" />
          </linearGradient>
          <path
            fill="url(#grad1)"
            d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z"
          >
            <animate
              repeatCount="indefinite"
              fill="url(#grad1)"
              attributeName="d"
              dur="50s"
              attributeType="XML"
              values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            "
            ></animate>
          </path>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6EB6E5"
            fill-opacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,74.7C480,64,600,64,720,80C840,96,960,128,1080,154.7C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> */}
        {/* <Table col1={"Title"} col2={"Keywords"} /> */}
        <Posts />
      </div>
    );
  }
}

export default App;
