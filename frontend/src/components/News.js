import React, { useEffect, useState } from "react";
import Story from "./Story";
import LoadingBar from "./LoadingBar";
import Spacer from "./Spacer";

export default function News() {
  const [error, setError] = useState(null);
  const [stories, setStory] = useState(null);

  useEffect(() => {
    const getCurrentPage = () => {
      const url = new URL(window.location.href);
      const page = url.pathname.split("/").pop();
      return page ? page : "home";
    };
    // fetch(
    //   "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=4fzCTy6buRI5xtOkZzqo4FfEkzUVAJdr"
    //
    const section = getCurrentPage();
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=4fzCTy6buRI5xtOkZzqo4FfEkzUVAJdr`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => setStory(data), 1500);
        console.log("Success ", data);
        console.log("Title ", data.results[0].title);
        console.log("Photo ", data.results[0].multimedia[0].url);
        console.log("URL ", data.results[0].url);
      })
      .catch((error) => {
        console.log("Error", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!stories) {
    return <LoadingBar type={"cylon"} color={"#193152"} />;
  } else {
    return (
      <>
        <ul className="stories">
          {stories.results.map((story, idx) => {
            return (
              <Story
                key={idx}
                title={story.title}
                abstract={story.abstract}
                img={story.multimedia[0].url}
                alt={story.multimedia[0].caption}
                link={story.url}
              />
            );
          })}
        </ul>
        <Spacer height={100} />
      </>
    );
  }
}
