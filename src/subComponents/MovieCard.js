import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-40 pr-3 cursor-pointer rounded-lg">
      <img alt="Movie-Poster" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
