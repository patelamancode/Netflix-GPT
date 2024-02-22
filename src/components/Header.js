import React from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const removeUser = useSelector();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
    dispatch(removeUser());
  };
  return (
    <div className="absolute z-10 flex justify-between bg-gradient-to-b from-black">
      <img
        className=" w-1/5 mx-7 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div>
        {/* <img alt="profile-icon" src="" /> */}
        <button
          onClick={handleSignout}
          className="m-5 p-5 font-bold text-2xl text-white"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
