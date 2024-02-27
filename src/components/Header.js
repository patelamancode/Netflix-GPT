import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/store/userSlice";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute z-10 flex justify-between bg-gradient-to-b from-black w-full">
      <img className=" w-1/5  mx-7 " src={APP_LOGO} alt="logo" />
      {user && (
        <div className="flex align-middle">
          <p className="m-5 text-white">
            Welcome! <span className="text-red-500">{user.displayName}</span>
          </p>
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
