import React from "react";
import "./SearchedMovies.css";
import { useNavigate } from "react-router-dom";

const SearchedMovies = ({ movieData }) => {
  const navigate = useNavigate();
  return (
    <div className="search-movie-blocks">
      {Array.isArray(movieData.results) ?
        movieData.results.map((movie) => (
          <div
            className="searched-movie-block"
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}`)}
          >
            <div className="searched-movie-img">
              <img src={movie.image} alt="Movie Poster" />
            </div>
            <div className="searched-movie-title">
              <h3>{movie.title}</h3>
              <h4>{movie.type}</h4>
            </div>
          </div>
        )) : (
          <>
          </>
        )}
    </div>
  );
};

export default SearchedMovies;
