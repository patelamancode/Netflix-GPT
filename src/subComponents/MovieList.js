import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-14">
      <h1 className="text-lg text-white py-2">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
