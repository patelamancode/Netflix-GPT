import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowsePriContainer from "./BrowsePriContainer";
import BrowseSecContainer from "./BrowseSecContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <BrowsePriContainer />
      <BrowseSecContainer />
    </>
  );
};

export default Browse;
