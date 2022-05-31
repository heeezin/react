import React from "react";

function YoutubeItem(props) {
  return (
    //id안에 있는 videoid를 가져와야하므로 id.videoid
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${props.results.id.videoid}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.results.snippet.thumbnails.medium.url} alt="" />
        <p>{props.results.snippet.title}</p>
      </a>
    </li>
  );
}
export default YoutubeItem;
