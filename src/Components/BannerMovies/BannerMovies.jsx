import React from "react";
import "./BannerMovies.css";
import { useNavigate } from "react-router-dom";

const BannerMovies = ({ movieData }) => {
  const navigate = useNavigate();

  return (
    <div className="Banner-movie-div">
      <div className="BannerMovies-container">
        <div className="Banner-movie-cards">
          {Array.isArray(movieData.results) && (
            movieData.results.map((movie) => {
              const { id, image, title, year, type } = movie;
              return (
                <div
                  className="Banner-card"
                  key={id}
                  onClick={() => navigate(`/movies/${id}`)}
                >
                  <div className="card-img">
                    <img src={image} alt="Movie Poster" />
                  </div>
                  <div className="card-title">
                    <h2>{title}</h2>
                    <h5>({year})</h5>
                    <h3>{type}</h3>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerMovies;
