import React from "react";

const Story = (props) => {
  return (
    <div className="story">
      <img className="story-body" src={props.img} alt={props.alt} />
      <li className="story-title">{props.title}</li>
      <li className="story-body">{props.abstract}</li>
      <a href={props.link} rel="noreferrer" target="_blank" type="button">
        READ MORE
      </a>
    </div>
  );
};
export default Story;
