import React from 'react';
import "./RelatedMovies.css"
import { useNavigate } from 'react-router-dom';
const RelatedMovies = ({ movieDataItems }) => {
  const navigate = useNavigate();

  return (
    <div className='related-movies'>
      <div className='watchlist-movie-heading'>
        <h1>Related movies</h1>
      </div>
      <div className="watchlist-movie-cards">
        {Array.isArray(movieDataItems.results) ?
          movieDataItems.results.map((movie) => (
            <div className="watchlist-card" key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
              <div className="movie-watchlist-img">
                <img src={movie.image} alt="Movie Poster" />
              </div>
              <div className="watchlist-title-content">
                <h2>{movie.title}</h2>
                <h5>({movie.year})</h5>
                <h3>{movie.contentType}</h3>
              </div>
            </div>
          )) : (
            <>
            </>
          )}
      </div>
    </div>
  )
}

export default RelatedMovies