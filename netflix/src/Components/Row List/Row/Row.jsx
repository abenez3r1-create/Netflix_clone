import React from "react";
import { useEffect, useState } from "react";
import requests from "../../../utils/requests";
import instance from "../../../utils/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = `https://image.tmdb.org/t/p/original`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await instance.get(fetchUrl);
        setMovie(request.data.results);
      } catch {
        console.log("error", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  function handleClick(film) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(film?.name || film?.title || film?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }

  const opts = {
    height: "500vh",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="outer_row_poster">
        {movies?.map((movie, index) => {
          const imagePath = `${isLargeRow ? movie.poster_path : movie.backdrop_path}`;
          return (
            <img
              key={index}
              src={`${baseUrl}${imagePath}`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
