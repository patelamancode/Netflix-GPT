import React, { useState } from "react";
import Header from "./Header";

const LogIn = () => {
  const [isLoginForm, setisLoginForm] = useState(true);

  const handleLoginMode = () => {
    setisLoginForm(!isLoginForm);
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="poster"
        />
      </div>
      <form className=" w-3/12 absolute p-6 bg-black bg-opacity-65 text-white my-36 mx-auto right-0  left-0 gradien">
        <h1 className="text-3xl my-6">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
        {!isLoginForm && (
          <input
            type="text"
            placeholder="Full name"
            className="py-2 my-2 w-full text-black px-5"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="py-2 my-2 w-full text-black px-5"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 my-2 w-full text-black px-5"
        />
        <button className="w-full p-2 my-8 cursor-pointer  bg-red-800">
          {isLoginForm ? "Sign In" : "Register"}
        </button>
        {isLoginForm ? (
          <p className="my-10">
            New to Netflix ?{" "}
            <span className="cursor-pointer" onClick={handleLoginMode}>
              Sign up now
            </span>
          </p>
        ) : (
          <p className="my-10">
            Already have account?{" "}
            <span className="cursor-pointer" onClick={handleLoginMode}>
              Please Sign in
            </span>
          </p>
        )}
      </form>
    </>
  );
};

export default LogIn;
