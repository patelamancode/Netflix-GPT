import React from "react";
import VideoTitle from "../subComponents/VideoTitle";
import VideoBackground from "../subComponents/VideoBackground";
import { useSelector } from "react-redux";

const BrowsePriContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovie);
  if (!movie) return;
  const nowPlayingMovie = movie[0];
  const { id, title, overview } = nowPlayingMovie;
  return (
    <div className="w-full">
      <VideoTitle id={id} title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default BrowsePriContainer;
