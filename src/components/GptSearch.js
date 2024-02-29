import GptSearchBar from "../subComponents/GptSearchBar";
import GptMovieSuggestion from "../subComponents/GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="w-full">
        <img className="absolute -z-10" src={BG_URL} alt="poster" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
};

export default GptSearch;
