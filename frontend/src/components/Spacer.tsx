import React, { FC, ReactElement } from 'react';

type SpacerProps = {
  height: number
}

const Spacer: FC<SpacerProps> = ({height}): ReactElement => {
  return (
    <div>
      <div style={{ height: height, clear: "both" }}>{""}</div>
    </div>
  );
};

export default Spacer;
