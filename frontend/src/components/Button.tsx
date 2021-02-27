import React, { FC, ReactElement } from 'react';

type ButtonProps = {
  link? : string
}

const Button: FC<ButtonProps> = ({link}): ReactElement => {
  return (
    <a
      className="story-link"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      type="button"
    >
      Read
    </a>
  );
};
export default Button;
