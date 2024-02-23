import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import LogIn from "./LogIn";

const Body = () => {
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

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
};
export default Body;
