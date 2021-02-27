import React from "react";

const Button = (props) => {
  return (
    <a
      className="story-link"
      href={props.link}
      rel="noopener noreferrer"
      target="_blank"
      type="button"
    >
      Read
    </a>
  );
};
export default Button;
