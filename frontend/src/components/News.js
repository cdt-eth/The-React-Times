import React, { useEffect, useState } from "react";
import Story from "./Story";

export default function News() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stories, setStory] = useState([]);

  useEffect(() => {
    fetch(
      "http://api.mediastack.com/v1/news?languages=en&access_key=09b9953aea9691c46007f0daa2be4fa4"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setStory(result);
          setIsLoaded(true);
          console.log(result.data[0]);
          console.log(result.data[0].title);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <ul className="stories">
          {stories.data.map((story) => {
            return <Story title={story.title} category={story.category} />;
          })}
        </ul>
      </div>
    );
  }
}
