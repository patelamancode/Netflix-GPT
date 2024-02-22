import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Browse from "./Browse";
import LogIn from "./LogIn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/store/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

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
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
};
export default Body;
