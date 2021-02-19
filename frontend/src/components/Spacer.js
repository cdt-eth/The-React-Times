import React from "react";

const Spacer = (props) => {
  return (
    <div>
      <div style={{ height: props.height, clear: "both" }}>{""}</div>
    </div>
  );
};

export default Spacer;
