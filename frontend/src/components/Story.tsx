import React, { FC, ReactElement } from "react";
import Button from "./Button";

interface StoryProps {
  title?: String;
  img?: string;
  alt?: string;
  abstract?: string;
  link?: string;
}

const Story: FC<StoryProps> = ({title, img, alt, abstract, link}): ReactElement => {
  return (
    <div className="story">
      <li className="story-title">{title}</li>
      <span className="story-content">
        <img className="story-img" src={img} alt={alt} />
        <span>
          <li className="story-body">{abstract}</li>
          <Button link={link} />
        </span>
      </span>
    </div>
  );
};
export default Story;
