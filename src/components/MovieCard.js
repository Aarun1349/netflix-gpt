import React from "react";
import { IMAGE_CDN_URL } from "../constants/Constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex pr-4 w-44" >
      <img
        className="mt-3 h-64 w-fit"
        src={IMAGE_CDN_URL + movie.poster_path}
        alt={movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;
