import React from "react";
import Button from "./Button";

const Story = (props) => {
  return (
    <div className="story">
      <li className="story-title">{props.title}</li>
      <img className="story-img" src={props.img} alt={props.alt} />
      <span className="story-content">
        <li className="story-body">{props.abstract}</li>
        <Button link={props.link} />
      </span>
    </div>
  );
};
export default Story;
