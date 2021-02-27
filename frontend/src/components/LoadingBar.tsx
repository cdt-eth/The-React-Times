import React, { FC, ReactElement } from 'react';
import ReactLoading, {LoadingProps} from "react-loading";

const LoadingBar: FC<LoadingProps> = ({ type, color, height, width, className }): ReactElement => (
  <ReactLoading
    type={type}
    color={color}
    height={667}
    width={150}
    className="loading"
  />
);
export default LoadingBar;
