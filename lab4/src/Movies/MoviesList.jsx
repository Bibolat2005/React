import React, { useState, useEffect } from "react";
import MovieCard from "../Card/MovieCard";
import "./MoviesList.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://imdb.iamidiotareyoutoo.com/search?q=Horror"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      setMovies(data.description || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie["#TITLE"]?.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const clearSearch = () => setFilterQuery("");

  return (
    <div className="movies-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
        <button className="clear-btn" onClick={clearSearch}>
          Clear
        </button>
      </div>

      <button className="load-button" onClick={fetchMovies}>
        Reload movies
      </button>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul className="movies-list">
        {filteredMovies.map((movie, index) => (
          <li className="movies-item" key={index}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>

      {!loading && filteredMovies.length === 0 && (
        <p>No movies found for your search.</p>
      )}
    </div>
  );
}

export default MoviesList;
