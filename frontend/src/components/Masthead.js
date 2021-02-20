import React from "react";
// import uuid from "uuid";

var sections = [
  "arts",
  "business",
  "health",
  "home",
  "movies",
  "opinion",
  "politics",
  "science",
  "sports",
  "technology",
];

export default function Masthead() {
  return (
    <div className="masthead">
      {sections.map((section, idx) => {
        return (
          <a href={section} key={idx}>
            <span>{section}</span>
          </a>
        );
      })}
    </div>
  );
}
