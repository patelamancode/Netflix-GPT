import React from "react";
import MovieList from "../subComponents/MovieList";
import { useSelector } from "react-redux";

const BrowseSecContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    movies.nowPlayingMovie && (
      <div className="bg-black">
        <div className="-mt-60 relative z-20">
          <MovieList title={"Newly Movie"} movies={movies?.nowPlayingMovie} />
          <MovieList title={"Popular"} movies={movies?.popularMovie} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovie} />
          <MovieList title={"Up Coming"} movies={movies?.upComingMovie} />
          <MovieList title={"Horror"} movies={movies?.nowPlayingMovie} />
        </div>
      </div>
    )
  );
};

export default BrowseSecContainer;
