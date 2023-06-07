import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Instructors from "./pages/auth/Instructors";
import Classes from "./pages/auth/Classes";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {path: "/", element:<Home></Home>},
        {path: "/login", element:<Login></Login>},
        {path: "/registration ", element:<Registration></Registration>},
        {path: "/instructors", element:<Instructors></Instructors>},
        {path: "/classes", element:<Classes></Classes>},
        // {path: "/", element:<Home></Home>},
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default router;
