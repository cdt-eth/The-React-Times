import React from "react";

const Row = (props) => {
  return (
    <div>
      <li className="post-title" key={props.key}>
        {props.title}
      </li>
      <li className="post-body" key={props.key}>
        {props.body}
      </li>
    </div>
  );
};
export default Row;
