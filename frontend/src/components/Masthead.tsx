import React, { FC, ReactElement } from "react";

interface MastheadProps {
  section?: String;
  idx?: Number;
  cur_section?: String;
  setCurSection?: () => void;
};

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

const Masthead: FC<MastheadProps> = ({section, idx}): ReactElement => {
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
};

export default Masthead;