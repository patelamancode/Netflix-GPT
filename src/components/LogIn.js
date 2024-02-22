import { useState, useRef } from "react";
import Header from "./Header";
import { loginDataValidation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import HomeStatic from "../subComponents/HomeStatic";

const LogIn = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleLoginMode = () => {
    setIsLoginForm(!isLoginForm);
  };
  const handleFormData = () => {
    // handle validations for inputs
    const message = loginDataValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isLoginForm) {
      // Auth for SignUp making api  call  for creating new user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    } else {
      // Auth for  SignIn by making api  call for existing user
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 absolute p-6 bg-black bg-opacity-65 text-white my-36 mx-auto right-0  left-0 gradien rounded-sm"
      >
        <h1 className="text-3xl my-6">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
        {!isLoginForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full text-white bg-black bg-opacity-65 rounded-lg border"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full text-white bg-black bg-opacity-65 rounded-lg border"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full text-white  bg-black bg-opacity-65 rounded-lg border"
        />
        <p className="text-red-600 font-bold w-full ">{errorMessage}</p>
        <button
          className="w-full p-2 my-8 cursor-pointer rounded-lg bg-red-800"
          onClick={handleFormData}
        >
          {isLoginForm ? "Sign In" : "Register"}
        </button>
        {isLoginForm ? (
          <p className="my-10 text-gray-400">
            New to Netflix ?{" "}
            <span
              className="cursor-pointer text-white"
              onClick={handleLoginMode}
            >
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
      <HomeStatic />
    </>
  );
};

export default LogIn;
