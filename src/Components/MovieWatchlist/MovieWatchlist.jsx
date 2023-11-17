import React from 'react';
import './MovieWatchlist.css';
import { useWatchlist } from '../WatchlistContext/WatchlistContext';
import { useNavigate } from 'react-router-dom';

const MovieWatchlist = () => {
  const navigate = useNavigate();
  const { watchlistData, handleRemoveMovie } = useWatchlist();
  return (
    <div className='watchlist'>
      <div className='watchlist-container'>
        <div className='watchlist-movie-heading'>
          <h1>Your WatchLists</h1>
        </div>
        <div className="watchlist-movie-cards">
          {Array.isArray(watchlistData) &&
            watchlistData.map((movie) => {
              const { id, image, title, year, contentType } = movie;
              return (
                <div className="watchlist-card" key={id}>
                  <div className="movie-watchlist-img" onClick={() => navigate(`/movies/${id}`)}>
                    <img src={image} alt="Movie Poster" />
                  </div>
                  <div className='watchlist-title'>
                    <div className="watchlist-title-content">
                      <h2>{title}</h2>
                      <h5>({year})</h5>
                      <h3>{contentType}</h3>
                    </div>
                    <div className='watchlist-remove-btn'>
                      <button onClick={() => handleRemoveMovie(movie.id)}>
                        <span className="material-symbols-outlined">
                          playlist_remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
            )}
        </div>
      </div>
    </div>
  );
};

export default MovieWatchlist;
