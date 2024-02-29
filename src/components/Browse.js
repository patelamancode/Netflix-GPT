import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowsePriContainer from "./BrowsePriContainer";
import BrowseSecContainer from "./BrowseSecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearchView);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <BrowsePriContainer />
          <BrowseSecContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
