import React from "react";

const Story = (props) => {
  return (
    <div>
      <li className="story-title">{props.title}</li>
      <li className="story-body">{props.abstract}</li>
    </div>
  );
};
export default Story;
