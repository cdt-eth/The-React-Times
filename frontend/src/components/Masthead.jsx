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
  const [cur_section, setCurSection] = React.useState("");

  return (
    <div className="masthead">
      {sections.map((section, idx) => {
        return (
          <a
            // href={"#" + section}
            href={section}
            key={idx}
            onClick={() => setCurSection(section)}
            className={section === cur_section ? "active" : ""}
          >
            <span>{section}</span>
          </a>
        );
      })}
    </div>
  );
}
