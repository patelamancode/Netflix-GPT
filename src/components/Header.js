import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/store/userSlice";
import { APP_LOGO, language } from "../utils/constants";
import { toggleGptView } from "../utils/store/gptSlice";
import { selectedLanguage } from "../utils/store/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const isGpt = useSelector((store) => store.gpt.showGptSearchView);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    // dispatch(removeUser());
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleGptSearchView = () => {
    dispatch(toggleGptView());
  };

  const handleLanguageSelected = (e) => {
    dispatch(selectedLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 flex justify-between bg-gradient-to-b from-black w-[100%]">
      <img className=" w-1/5  mx-7 " src={APP_LOGO} alt="logo" />
      {user && (
        <div className="flex align-middle">
          <div className="m-4">
            <p className="mb-3 text-white">
              Welcome! <span className="text-red-500">{user.displayName}</span>
            </p>
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded-lg"
              onClick={handleGptSearchView}
            >
              {isGpt ? "HomePage" : "GPT Search"}
            </button>
            {isGpt && (
              <select
                className="px-4 py-2 mx-4 bg-gray-800 text-white rounded-lg"
                onChange={handleLanguageSelected}
              >
                {language.map((lang) => (
                  <option key={lang.type} value={lang.type}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button
            onClick={handleSignout}
            className="m-5 p-5 font-bold text-2xl text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
