import React from "react";
import "./SearchedMovies.css";
import { useNavigate } from "react-router-dom";

const SearchedMovies = ({ movieData }) => {
  const navigate = useNavigate();
  return (
    <div className="search-movie-blocks">
      {Array.isArray(movieData.results) &&
        movieData.results.map((movie) => {
          const { id, image, title, type } = movie;
          return (
            <div
              className="searched-movie-block"
              key={movie.id}
              onClick={() => navigate(`/movies/${id}`)}>
              <div className="searched-movie-img">
                <img src={image} alt="Movie Poster" />
              </div>
              <div className="searched-movie-title">
                <h3>{title}</h3>
                <h4>{type}</h4>
              </div>
            </div>
          )}
        )}
    </div>
  );
};

export default SearchedMovies;
