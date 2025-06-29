import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ar`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("خطأ في جلب الأفلام:", err));
  }, []);

  return (
    <div>
      <h1>أفلام مشهورة 🎬</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
