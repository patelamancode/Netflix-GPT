import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovie } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  // fetcing data from TMDB api and updating store
  const getUpComingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpComingMovie(data.results));
  };
  useEffect(() => {
    getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
