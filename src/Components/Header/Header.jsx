import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useWatchlist } from '../WatchlistContext/WatchlistContext';

const Header = ({ setMovieData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { watchlistData } = useWatchlist();

  const fetchData = async () => {
    try {
      if (searchQuery.trim() !== "") {
        const response = await axios.get(
          `https://imdb-api.projects.thetuhin.com/search?query=${searchQuery}`
        );
        setMovieData(response.data);
      } else {
        setMovieData([]);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    setSearchQuery("");
    setMovieData([]);
  }, [location, setMovieData]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  return (
    <div className="app-portion">
      <div className="header-div">
        <div className="container">
          <div className="header-content">
            <div className="header-logo" onClick={() => navigate(`/`)} >
              <img
                src="https://download.logo.wine/logo/IMDb/IMDb-Logo.wine.png"
                alt="IMDb Logo"
              />
            </div>
            <div className="header-menu">
              <button className="header-menu-btn">
                <span className="material-symbols-outlined">menu</span>
                <p>Menu</p>
              </button>
            </div>
            <div className="header-searchbar">
              <input
                type="text"
                placeholder="Search IMDb"
                value={searchQuery}
                onChange={handleSearch}
                onKeyDown={enterSearch}
                onKeyUp={fetchData}
              />
              <button className="search-btn" onClick={fetchData}>
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
            <div className="app-watchlist">
              <button className="watchlist-btn" onClick={() => navigate(`/watchlist`)}>
                <span className="material-symbols-outlined">bookmarks</span>
                <p>Watchlist ({watchlistData.length})</p>
              </button>
            </div>
            <div className="app-signin">
              <button className="signin-btn">
                <p>SignIn</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
