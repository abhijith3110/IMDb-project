import React from "react";
import "./BannerMovies.css";
import { useNavigate } from "react-router-dom";

const BannerMovies = ({ movieData }) => {
  const navigate = useNavigate();

  return (
    <div className="Banner-movie-div">
      <div className="BannerMovies-container">
        <div className="Banner-movie-cards">
          {Array.isArray(movieData.results) ? (
            movieData.results.map((movie) => (
              <div
                className="Banner-card"
                key={movie.id}
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                <div className="card-img">
                  <img src={movie.image} alt="Movie Poster" />
                </div>
                <div className="card-title">
                  <h2>{movie.title}</h2>
                  <h5>({movie.year})</h5>
                  <h3>{movie.type}</h3>
                </div>
              </div>
            ))
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerMovies;
