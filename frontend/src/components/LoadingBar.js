import React from "react";
import ReactLoading from "react-loading";

const LoadingBar = ({ type, color }) => (
  <ReactLoading
    type={type}
    color={color}
    height={667}
    width={150}
    className="loading"
  />
);
export default LoadingBar;
