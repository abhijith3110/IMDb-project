import React from 'react';
import Header from '../Header/Header';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useState } from "react";
import MainBanner from '../MainBanner/MainBanner';
import { Route, Routes } from "react-router-dom";
import MovieWatchlist from "../MovieWatchlist/MovieWatchlist";
import { WatchlistProvider } from '../WatchlistContext/WatchlistContext';

const AppRouter = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [movieData, setMovieData] = useState([]);
  return (
    <div className="AppRouter">
      <WatchlistProvider>
        <Header setMovieData={setMovieData} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <Routes>
          <Route path="/" element={<MainBanner movieData={movieData} />}></Route>
          <Route path="/movies/:userId" element={<MovieDetails movieData={movieData} searchQuery={searchQuery} />}></Route>
          <Route path='/watchlist' element={<MovieWatchlist />}></Route>
        </Routes>
      </WatchlistProvider>
    </div>
  )
}

export default AppRouter;