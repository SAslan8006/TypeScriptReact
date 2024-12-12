import { createBrowserRouter } from "react-router-dom";
import Login from "./pages";
import Error from "./pages/error";
import Signup from "./pages/signup";
import { Home } from "lucide-react";
import CreatePost from "./pages/Post";
import Profile from "./pages/profile";
import MyPhotos from "./pages/myphotos";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/post",
    element: <CreatePost />,
    errorElement: <Error />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <Error />,
  },
  {
    path: "/myphotos",
    element: <MyPhotos />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/singup",
    element: <Signup />,
    errorElement: <Error />,
  },
]);

export default router;
