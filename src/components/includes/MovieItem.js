import React from "react";

function MovieItem(props) {
  return (
    <li>
      <a
        href={`https://www.themoviedb.org/movie/${props.results.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.results.poster_path}`}
          alt={props.results.title}
        />
        <p>{props.results.title}</p>
      </a>
    </li>
  );
}

export default MovieItem;
