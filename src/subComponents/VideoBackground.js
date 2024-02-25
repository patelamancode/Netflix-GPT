import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/store/movieSlice";

const VideoBackground = ({ movieId }) => {
  //   console.log(movieId);
  const dispatch = useDispatch();
  //   need to check  trailer vedio
  const trailerVedio = useSelector((store) => store.movie?.trailerVedio);

  // fetch movie trailer vedioes
  const getMovieVedioes = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/976573/videos",
      API_OPTIONS
    );
    const trailerVedioes = await res.json();
    const filterTrailer = trailerVedioes.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : trailerVedioes.results[0];
    console.log(trailer);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVedioes();
  }, []);
  console.log(trailerVedio);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVedio?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
