import React from "react";

const Story = (props) => {
  return (
    <div className="story">
      <li className="story-title">{props.title}</li>
      <img className="story-img" src={props.img} alt={props.alt} />
      <span className="story-content">
        <li className="story-body">{props.abstract}</li>
        <a
          className="story-link"
          href={props.link}
          rel="noreferrer"
          target="_blank"
          type="button"
        >
          Read →
        </a>
      </span>
    </div>
  );
};
export default Story;
