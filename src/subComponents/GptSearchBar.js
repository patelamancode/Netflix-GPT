import languages from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.lang.Language);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="m-4 p-4 bg-black w-1/2 grid grid-cols-12">
        <input
          className="m-2 px-6 py-2 col-span-9 rounded-md"
          type="text"
          placeholder={languages[lang].placeholder}
        />
        <button className="col-span-3 m-2 py-2 rounded-lg font-bold text-white bg-red-700">
          {languages[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
