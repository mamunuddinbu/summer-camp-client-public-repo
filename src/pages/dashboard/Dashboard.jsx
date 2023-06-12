import React from "react";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import AdminDashboard from "./adminDashboard/AdminDashboard";
import useInstructor from "../../hooks/useInstructor";
import InstructorDashboard from "./instructorDashboard/InstructorDashboard";
import useStudent from "../../hooks/useStudent";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import StudentDashboard from "./studentDashboard/StudentDashboard";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isInstructor] = useInstructor(user?.email);
  const [isStudent] = useStudent(user?.email);

  return (
    <div>
      <Link to="/" className="flex items-center"> 
        <img src={logo} alt="" className="h-20" /><button className="btn bg-slate-500">Go Back</button>
      </Link>
      {isAdmin && <AdminDashboard></AdminDashboard>}
      {isInstructor && <InstructorDashboard></InstructorDashboard>}
      {isStudent && <StudentDashboard></StudentDashboard>}
    </div>
  );
};

export default Dashboard;
