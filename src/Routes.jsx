import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Instructors from "./pages/home/Instructors";
import Classes from "./pages/home/Classes";
import NotFound from "./pages/NotFound/NotFound";
import SignUp from "./pages/auth/SignUp";
import PrivateRoute from "./pages/home/compo/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {path: "/", element:<Home></Home>},
        {path: "/login", element:<Login></Login>},
        {path: "/sign-up", element: <SignUp></SignUp>},
        {path: "/instructors", element:<Instructors></Instructors>},
        {path: "/classes", element:<PrivateRoute><Classes></Classes></PrivateRoute>}
        // {path: "/", element:<Home></Home>},
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default router;
