import React from "react";
import { poster_url } from "../utils/constants";

const MovieCard = ({ movieData }) => {
  if (!movieData?.poster_path) return null;
  return (
    <div className="w-36 md:w-48 pr-6">
      <img
        src={poster_url + movieData.poster_path}
        alt={movieData.original_title}
      />
    </div>
  );
};

export default MovieCard;
