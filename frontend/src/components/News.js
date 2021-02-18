import React, { useEffect, useState } from "react";
import Story from "./Story";
import LoadingBar from "./LoadingBar";

export default function News() {
  const [error, setError] = useState(null);
  const [stories, setStory] = useState(null);

  //   const [stories, setStory] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=4fzCTy6buRI5xtOkZzqo4FfEkzUVAJdr"
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => setStory(data), 1500);
        console.log("Success ", data);
        console.log("Success ", data.results[0].title);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!stories) {
    // return <div>Loading...</div>;
    return <LoadingBar type={"cylon"} color={"#6eb6e5"} />;
  } else {
    return (
      <>
        <ul className="stories">
          {stories.results.map((story) => {
            return <Story title={story.title} abstract={story.abstract} />;
          })}
        </ul>
      </>
    );
  }
}
