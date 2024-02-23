import React from "react";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
    // dispatch(removeUser());
  };
  return (
    <div className="absolute z-10 flex justify-between bg-gradient-to-b from-black w-screen">
      <img
        className=" w-1/5  mx-7 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex align-middle">
          {/* <img alt="profile-icon" src="" /> */}
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
