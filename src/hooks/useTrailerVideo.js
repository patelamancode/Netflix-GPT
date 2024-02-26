import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/store/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const [trailerId, setTrailerId] = useState(null);
  // const trailerVedio = useSelector((store) => store.movie?.trailerVedio);

  // fetch movie trailer vedioes
  const getMovieVedioes = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await res.json();
    const filterTrailer = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : data.results[0];
    setTrailerId(trailer.key);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVedioes();
  }, []);

  return trailerId;
};

export default useTrailerVideo;
