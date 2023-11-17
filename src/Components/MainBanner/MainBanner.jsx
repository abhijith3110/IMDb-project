import React from "react";
import "./MainBanner.css";
import BannerMovies from "../BannerMovies/BannerMovies";

const MainBanner = ({ movieData }) => {
  return (
    <div className="main-banner">
      <div className="container-banner">
        <img
          src="https://www.m9.news/wp-content/uploads/2023/10/Bollywood-Manipulation-IMDb.jpg"
          alt="Error"
        />
      </div>
      <BannerMovies movieData={movieData} />
    </div>
  );
};

export default MainBanner;
