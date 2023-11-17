import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedMovies from "../RelatedMovies/RelatedMovies";
import SearchedMovies from "../SearchedMovies/SearchedMovies";
import { useWatchlist } from "../WatchlistContext/WatchlistContext";
import "./MovieDetails.css";

const MovieDetails = ({ movieData }) => {
  const { userId } = useParams();
  const [movieDataItems, setMovieDataItems] = useState([]);
  const { watchlistMovieCreate, setMovieContant, movieContant,handleRemoveMovie,watchlistData } = useWatchlist();

  useEffect(() => {
    axios
      .get(`https://imdb-api.projects.thetuhin.com/title/${userId}`)
      .then((response) => {
        setMovieContant(response.data);
        relatedMovies(response.data.title);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, [userId, setMovieContant]);

  const relatedMovies = (title) => {
    axios
      .get(`https://imdb-api.projects.thetuhin.com/search?query=${title}`)
      .then((response) => {
        setMovieDataItems(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const isInWatchlist = watchlistData.some((movie) => movie.id === movieContant.id);
 
  const handleWatchlistButtonClick = () => {
    if (isInWatchlist) {
      handleRemoveMovie(movieContant.id);
    } else {
      watchlistMovieCreate();
    }
  };

  return (
    <div className="main-movie-div">
      <div className="container-banner">
        <div className="main-movie-card">
          <div className="main-movie-img">
            <img src={movieContant.images || "NOT AVAILABLE"} alt="ERR" />
          </div>
          <div className="main-movie-content">
            <div className="movie-title-type">
              <h1>
                {movieContant.title || "NOT AVAILABLE"}(
                {movieContant.contentType || "NOT AVAILABLE"})
              </h1>
            </div>
            <div className="movie-year">
              <h3>Year Of Release: {movieContant.year || "NOT AVAILABLE"}</h3>
            </div>
            <div className="movie-director">
              <h3>DIRECTOR: {movieContant.directors || "NOT AVAILABLE"}</h3>
            </div>
            <div className="movie-genre">
              <h4>GENRE: {movieContant.genre || "NOT AVAILABLE"}</h4>
            </div>
            <div className="movie-actors">
              <h4>ACTORS: {movieContant.actors || "NOT AVAILABLE"}</h4>
            </div>
            <div className="movie-runtime">
              <h4>DURATION: {movieContant.runtime || "NOT AVAILABLE"}</h4>
            </div>
            <div className="movie-plot">
              <h4>ABOUT: {movieContant.plot || "NOT AVAILABLE"}</h4>
            </div>
          </div>
          <div className="watchlist-div">
            <button className="watch-list-btn" onClick={handleWatchlistButtonClick}>
             <h4>{isInWatchlist ? "REMOVE FROM WATCHLIST" : "ADD TO WATCHLIST"}</h4>
            </button>
          </div>
        </div>
      </div>

      <div className="related-movies-component">
        <div className="related-movies-component-container">
          <RelatedMovies movieDataItems={movieDataItems} />
        </div>
      </div>

      <div className="searched-container">
        <div className="Searched-movies-cards">
          <SearchedMovies movieData={movieData} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
