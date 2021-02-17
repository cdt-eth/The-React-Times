import React, { useEffect, useState } from "react";
import Story from "./Story";
import LoadingBar from "./LoadingBar";

export default function News() {
  const [error, setError] = useState(null);
  const [stories, setStory] = useState(null);

  //   const [stories, setStory] = useState([]);

  useEffect(() => {
    fetch(
      "http://api.mediastack.com/v1/news?languages=en&access_key=09b9953aea9691c46007f0daa2be4fa4"
    )
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => setStory(result), 2000);
        console.log("Success ", result);
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
        {/* <LoadingBar type={"cylon"} color={"#6eb6e5"} /> */}
        <ul className="stories">
          {stories.data.map((story) => {
            return <Story title={story.title} category={story.category} />;
          })}
        </ul>
      </>
    );
  }
}
