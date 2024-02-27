import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowsePriContainer from "./BrowsePriContainer";
import BrowseSecContainer from "./BrowseSecContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <>
      <Header />
      <BrowsePriContainer />
      <BrowseSecContainer />
    </>
  );
};

export default Browse;
