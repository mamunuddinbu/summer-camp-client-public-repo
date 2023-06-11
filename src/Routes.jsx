import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Instructors from "./pages/home/Instructors";
import Classes from "./pages/home/Classes";
import NotFound from "./pages/NotFound/NotFound";
import SignUp from "./pages/auth/SignUp";
import PrivateRoute from "./pages/home/compo/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
// import StudentDashboard from "./pages/dashboard/studentDashboard/StudentDashboard";
// import InstructorDashboard from "./pages/dashboard/instructorDashboard/InstructorDashboard";
import AdminDashboard from "./pages/dashboard/adminDashboard/AdminDashboard";
import AddClassForm from "./pages/dashboard/instructorDashboard/AddClassForm";
import DashboardLayout from "./layout/DashboardLayout";
import Payment from "./pages/dashboard/studentDashboard/payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/sign-up", element: <SignUp></SignUp> },
      { path: "/instructors", element: <Instructors></Instructors> },
      {
        path: "/classes",
        element: (
          <PrivateRoute>
            <Classes></Classes>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      { path: "/dashboard/payment", element: <Payment></Payment> },
    ],
  },
  {
    path: "/payment",
    element: (
      <PrivateRoute>
        <Payment></Payment>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
