import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div style={{ width: 180, cursor: "pointer" }}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", borderRadius: 8 }}
      />
      <h4 style={{ margin: "8px 0 4px" }}>{movie.title}</h4>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
}
