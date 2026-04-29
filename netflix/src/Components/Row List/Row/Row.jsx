import React from "react";
import { useEffect, useState } from "react";
import requests from "../../../utils/requests";
import instance from "../../../utils/axios";
import "./row.css";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovie] = useState([]);
  const baseUrl = `https://image.tmdb.org/t/p/original`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(fetchUrl);
        const request = await instance.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

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
              className={`row_poster ${isLargeRow && "row_posterLarge"}   `}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Row;
