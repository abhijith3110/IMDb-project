import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WatchlistContext = createContext();
export const useWatchlist = () => {
  return useContext(WatchlistContext);
};

export const WatchlistProvider = ({ children }) => {
  const [watchlistData, setWatchlistData] = useState([]);
  const [movieContant, setMovieContant] = useState([]);

  const getWatchlistData = () => {
    axios
      .get("http://localhost:4000/watchlist")
      .then((response) => {
        setWatchlistData(response.data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    getWatchlistData();
  }, []);

  const handleRemoveMovie = (movieId) => {
    axios
      .delete(`http://localhost:4000/watchlist/${movieId}`)
      .then((response) => {
        console.log(response.data);
        getWatchlistData();
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });

  };

  const watchlistMovieCreate = () => {
    axios
      .post(`http://localhost:4000/watchlist`, movieContant)
      .then((response) => console.log(response));
      getWatchlistData();
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlistData,
        handleRemoveMovie,
        watchlistMovieCreate,
        setMovieContant,
        movieContant,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
