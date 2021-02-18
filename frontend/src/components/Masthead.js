import React from "react";

var sections = [
  "arts",
  "business",
  "fashion",
  "health",
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
      {sections.map((section) => {
        return (
          <a href={section}>
            <span>{section}</span>
          </a>
        );
      })}
    </div>
  );
}
