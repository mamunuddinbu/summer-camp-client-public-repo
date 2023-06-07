import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {path: "/", element:<Home></Home>},
        {path: "/login", element:<Login></Login>},
        {path: "/registration ", element:<Home></Home>},
        {path: "/", element:<Home></Home>},
    ]
  },
]);

export default router;
