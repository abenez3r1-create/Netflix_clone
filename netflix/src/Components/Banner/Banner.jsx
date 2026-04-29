import React from "react";
import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await instance.get(requests.fetchNetflixOriginals);
      const randomMovie =
        res.data.results[Math.floor(Math.random() * res.data.results.length)];

      setMovie(randomMovie);
    }

    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="hero"
      style={{
        backgroundImage: movie
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{movie?.name || movie?.title}</h1>
        <p className="hero-overview">{truncate(movie?.overview, 140)}</p>
      </div>
    </div>
  );
}

export default Banner;
