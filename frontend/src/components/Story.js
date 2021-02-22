import React from "react";
import Button from "./Button";

const Story = (props) => {
  return (
    <div className="story">
      <li className="story-title">{props.title}</li>
      <span className="story-content">
        <img className="story-img" src={props.img} alt={props.alt} />
        <span>
          <li className="story-body">{props.abstract}</li>
          <Button link={props.link} />
        </span>
      </span>
    </div>
  );
};
export default Story;
